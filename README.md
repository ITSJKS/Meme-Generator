
# AI based Chatbot to answer FAQs

We are making an AI based chatbot to automate the process of answering frequently asked questions.


Background: There have always been queries of people regarding various topics to which answers are provided manually by people. In order to make this process fast the FAQs can be answer using the latest AI technologies where answers can be automatically generated according to the questions. Also for every question asked it can be stored and the list of questions can be increased to provide better mapping of question and answers. This process can reduce lot of work pressure for both the consumer and the government. Also providing quick responses and suggestions can help in the better economical market growth. Summary: There have always been queries of people regarding various topics to which answers are provided manually by people. In order to make this process fast the FAQs can be answer using the latest AI technologies where answers can be automatically generated according to the questions. Objective: We need you to develop an AI based Chatbot (mobile/web app) to create answers to queries based on FAQs and more FAQs getting automatically added including categorization. You can use machine learning algorithms to increase the dataset of questions and answers and ensure that the mapping of questions and answers remain maintained every time there is an increase in the dataset.



## FAQ

#### How does this chatbot work ? 

This chatbot takes input from the user as query and an AI model use this query to generate automatic response.

#### What are the technology stack you are using ? 

We are using HTML , CSS , JS , Node + Express , mongoDB , Flask and tensorflow.


#### What is the use of Flask in this project ?

We are using Flask software to implement our API in python. We are connecting our AI model to the user interface through this API.

## Tech Stack

**Frontend** :HTML , CSS, JS

**Server:** Node, Express

**Database:** mongoDB

**MODEL:** TensorFlow 


## Documentation

### THe working of our User Interface

The  UI of our  chat bot is a web application and we are using NodeJS to create our server for our backend.
#### The UI works as below:
- Start the server by commmand "node app.js" and go to localhost:PORT to access the web app

- Accessing the web app will request to "/" home route,where the page is render with ejs.

- Takes the query as an input from user using html tags

- Post the query(question) to "/" route,where the express js is used to get the 
  query and store it in a array of questions

- Using the query we make an http get request to the api of ai model by giving 
  query as an parameter in the api route and get an response which an answer
  is provided
- The answer from the api is stored in a array and the response for the post 
  request is redirected to "/" get 

- On redirecting to "/" the express render the ejs file in the browser,
  by passing the arrays of the question and answer to render in website,
  the chat information is displayed on web app

### Working of API and Database

- we are using Flask software to implement API.
- API transfer the query from UI to AI model which works on those input and provide an answer.
- We use API to transfer answer created by the model back to the UI.
- We are using mongoDB as a database. mondoDB is a cloud based database which stores data as cluster of doucments. We are using PyMongo to retreive the data from our database and use those data on our model tranining.


### Working of our AI model

#### Libraries Used

In this Model we are using a Bunch of libraries such as nltk(Natural language tool kit),which contains 
all the tools for cleaning up text and preparing and for deep learning algorithms we are using
json, which loads json files directly into Python, pickle, which loads pickle files, 
(numpy) which can perform linear algebra operations very efficiently, and keras, which is the deep learning framework we’ll be using.
we will use a nested for loop to extract all of the words within “patterns” and add them to our words list.

#### Process 

We then add to our documents list each pair of patterns with their corresponding tag.
We also add the tags into our classes list, and we use a simple conditional statement to prevent repeats.
Next, we will take the words list and lemmatize and lowercase all the words inside.Now we will initialize our training data with a variable training.
We have a feature called output_row which simply acts as a key for the list. We then shuffle our training set and do a train-test-split,
with the patterns being the X variable and the intents being the Y variable.
Now that we have our training and test data ready, we will now use a deep learning model from keras called Sequential.
This particular network has 3 layers, with the first one having 128 neurons, the second one having 64 neurons
and the third one having the number of intents as the number of neurons.
After the model is trained, the whole thing is turned into a numpy array and saved as chatbot_model.h5.
We have the clean_up_sentence() function which cleans up any sentences that are inputted. This function is used in the bow() function, 
which takes the sentences that are cleaned up and creates a bag of words that are used for predicting classes. 

#### Prediction

In our predict_class() function, we use an error threshold of 0.25 to avoid too much overfitting.
The function getResponse() takes the list outputted and checks the json file and outputs the most response with the highest probability.
## Model Accuracy 

Our model is giving an Accuracy of 90%, with tranining on better dataset we can get it to 95%+.

[![Model Accuracy](https://i.postimg.cc/C5TpppZq/image.png)](https://postimg.cc/zbjcTMFz)


## Deployment

It is still pending for our project . We are still in developing stage.

You can run this file on your machine by using command
```bash
  node app.js
```





## Contributors


- [@ABHISHEK MISHRA](https://www.github.com/abhishekiiitr)

- [@JITESH KUMAR SINGH](https://www.github.com/ITSJKS)

- [@LOKESH REDDY](https://www.github.com/lokeshRM)

- [@ANJANEY SHRINIWAS](https://www.github.com/branch-electronics)

- [@SHUBHADEEP MANDAL](https://www.github.com/Seronic2001)

- [@GARIMA JAIN](https://www.github.com/ITSJKS)


 
