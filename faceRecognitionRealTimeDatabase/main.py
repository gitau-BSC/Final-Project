import pickle
import cv2
import cvzone
import os
import numpy as np
import face_recognition
from EncodeGenerator import studentIds

cap = cv2.VideoCapture(0)
cap.set(3, 640)  # Set width
cap.set(4, 480)  # Set height

imgBackground = cv2.imread('Resources/background.png')

# Importing the mode images into a list
folderModePath = 'Resources/Modes'
modePathList = os.listdir(folderModePath)
# list containing all the images
imgModeList = []
for filename in modePathList:
    imgModeList.append(cv2.imread(os.path.join(folderModePath, filename)))
# print(len(imgModeList))

# load the encoding file
print("loading Encode File...")
file = open('EncodeFile.p','rb')
encodeListKnownwithIds = pickle.load(file)
file.close()
encodeListKnown, studentIds = encodeListKnownwithIds
# print(studentIds)
print("Encode File loaded")
if not cap.isOpened():
    print("Error: Could not open camera")
else:
    while True:
        success, img = cap.read()

        imgS = cv2.resize(img, (0, 0), None, 0.25, 0.25)
        imgS = cv2.cvtColor(imgS, cv2.COLOR_BGR2RGB)

        faceCurFrame =  face_recognition.face_locations(imgS)
        encodeCurFrame = face_recognition.face_encodings(imgS, faceCurFrame)

        imgBackground[162:162+480, 55:55+640] = img  # overlays image in real time
        imgBackground[44:44 + 633, 808:808 + 414] = imgModeList[2]

        # zip to use both of the for loops in the list
        for encodeFace, faceLoc in zip(encodeCurFrame, faceCurFrame):
            matches = face_recognition.compare_faces(encodeListKnown, encodeFace)
            faceDis = face_recognition.face_distance(encodeListKnown, encodeFace)

            # print("matches", matches)
            # print("faceDis", faceDis)

            matchIndex = np.argmin(faceDis)
            # print("Match Index", matchIndex)

            if matches[matchIndex]:
                # print("Known Face Detected")
                # print(studentIds[matchIndex])
                y1,x2,y2,x1 = faceLoc
                y1, x2, y2, x1 = y1*4,x2*4,y2*4,x1*4
                bbox = 55+x1, 162+y1, x2-x1,y2-y1
                imgBackgrouund = cvzone.cornerRect(imgBackground, bbox,rt=0)


        if not success:
            print("Error: Failed to capture frame")
            break  # Exit loop if frame capture fails
        cv2.imshow("Webcam", img)#
        cv2.imshow("face Attendance",  imgBackground)

        if cv2.waitKey(1) & 0xFF == ord('q'):  # Press 'q' to exit
            break

cap.release()
cv2.destroyAllWindows()
