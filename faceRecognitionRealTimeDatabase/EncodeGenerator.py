import cv2
import os
import face_recognition
import pickle

# Importing student images
folderPath = 'images/'  # Main directory
imgList = []
studentIds = []

# Loop through subfolders
for subfolder in os.listdir(folderPath):
    subfolderPath = os.path.join(folderPath, subfolder)

    # Check if it's a folder
    if os.path.isdir(subfolderPath):
        for filename in os.listdir(subfolderPath):
            filePath = os.path.join(subfolderPath, filename)

            # Read the image
            img = cv2.imread(filePath)
            if img is not None:
                imgList.append(img)

                student_id = os.path.splitext(filename)[0]
                studentIds.append(student_id)  # Store image name as ID
                print(f"Loaded: {filePath}")  # Print the loaded file

print(f"Total images loaded: {len(imgList)}")
print(f"Student IDs: {studentIds}")


def findEncodings(imagesList):
    encodeList = []
    for img in imagesList:
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        encodings = face_recognition.face_encodings(img)

        if encodings:  # Ensure at least one face is found
            encodeList.append(encodings[0])
        else:
            print(f"Warning: No face found in one of the images!")

    return encodeList


print("Encoding Started....")
encodeListKnown = findEncodings(imgList)

encodeListKnownwithIds = [encodeListKnown, studentIds]
print("Encoding complete")

with open("EncodeFile.p", "wb") as file:
    pickle.dump(encodeListKnownwithIds, file)

print("file saved")
