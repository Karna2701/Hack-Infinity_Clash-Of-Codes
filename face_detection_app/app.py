import streamlit as st
import cv2
from PIL import Image,ImageEnhance
import numpy as np
import os

@st.cache
def load_image(img):
      im = Image.open(img)
      return im

face_cascade = cv2.CascadeClassifier('frecog/haarcascade_frontalface_default.xml')

def detect_faces(our_image):
    new_img = np.array(our_image.convert('RGB'))
    img = cv2.cvtColor(new_img,1)
    gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    # Detect face
    faces = face_cascade.detectMultiScale(gray,1.1,4)
    # Draw rectangle
    for (x,y,w,h) in faces:
        cv2.rectangle(img,(x,y),(x+w,y+h),(250,0,0),2)
    return img,faces


def main():

    st.title("Face Detection App")
    st.text("Build with Streamlit and Opencv")

    activities = ["Detection", 'About']
    choice = st.sidebar.selectbox("Select Activity", activities)

    if choice == 'Detection':
        st.subheader("Face Detection")

        image_file = st.file_uploader("Upload Image", type=['jpg','png','jpeg'])

        if image_file is not None:
            our_image = Image.open(image_file)
            st.text("Original Image")
            # st.write(type(our_image))
            st.image(our_image)
        
        enhance_type = st.sidebar.selectbox("Enhance Type",["Original","Gray-Scale"])
        if enhance_type == 'Gray-Scale':
            new_img = np.array(our_image.convert('RGB'))
            img = cv2.cvtColor(new_img,1)
            gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
            #  st.write(new_img)
            st.image(gray)
        

        # Face Detection
        task= ["Faces"] 
        feature_choice = st.sidebar.radio("Find Features",task)
        if st.button("Process"):
             
            if feature_choice == 'Faces':
                result_img, result_faces = detect_faces(our_image)      
                st.image(result_img)

                st.success("Found {} faces".format(len(result_faces)))

    elif choice == 'About':
          st.subheader("About")

if __name__ == '__main__':
        main()