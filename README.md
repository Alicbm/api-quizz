# api-quizz

Hello!

Welcome to my profile, this time I have created an API to use it in one of my apps ([Quizz](https://github.com/Alicbm/quizz "Quizz")) which is a quiz app, if you want to know a bit more about the quiz app you can click on the before link.

The API has 7 categories, with 15 questions for each category, at the moment it is the first version, then I will create more categories and more questions. Here you can create new questions, update the questions, you can even delete the questions (for now the API does not have data persistence, it does not connect to a database), however you can create your own data persistence.

## We have the following question categories to choose from:

You can click on any category to see the API for that category:

- General culture
- Animals
- Sports
- Cities
- JavaScript
- HTML
- CSS

## How to use it? :brain:
### GET:

- ### All results: 

**Main url** : `api-quizz.vercel.app/api/v1` 

With this url you have access to all the categories and all the questions, in total there are 105 questions. However, if you want to access a specific category, you can go to the following url:

`api-quizz.vercel.app/api/v1/nameCategory`  

###### Example: 
1. [api-quizz.vercel.app/api/v1/animals](https://api-quizz.vercel.app/api/v1/animals "api-quizz.vercel.app/api/v1/animals")
2. [api-quizz.vercel.app/api/v1/sports](https://api-quizz.vercel.app/api/v1/sports "api-quizz.vercel.app/api/v1/sports")
3. [api-quizz.vercel.app/api/v1/cities](https://api-quizz.vercel.app/api/v1/cities "api-quizz.vercel.app/api/v1/cities")
4. [api-quizz.vercel.app/api/v1/general-culture](https://api-quizz.vercel.app/api/v1/general-culture "api-quizz.vercel.app/api/v1/general-culture")
5. [api-quizz.vercel.app/api/v1/javascript](https://api-quizz.vercel.app/api/v1/javascript "api-quizz.vercel.app/api/v1/javascript")
6. [api-quizz.vercel.app/api/v1/html](https://api-quizz.vercel.app/api/v1/html "api-quizz.vercel.app/api/v1/html")
7. [api-quizz.vercel.app/api/v1/css](https://api-quizz.vercel.app/api/v1/css "api-quizz.vercel.app/api/v1/css")

- ### Specific results:

To get a specific result you need to be in a specific category and type the "id" you want to get.

`api-quizz.vercel.app/api/v1/nameCategory/id`

###### Example:

1. [api-quizz.vercel.app/api/v1/animals/5](https://api-quizz.vercel.app/api/v1/animals/5 "api-quizz.vercel.app/api/v1/animals/5")

- ### Query parameters:

In this API there is an option to choose the amount of results you want to get, through the parameter "size", to use this parameter you must be in a specific category, here is the main url for this:

`api-quizz.vercel.app/api/v1/nameCategory?size=amount`

###### Example:
1. [api-quizz.vercel.app/api/v1/animals?size=4](https://api-quizz.vercel.app/api/v1/animals?size=4 "api-quizz.vercel.app/api/v1/animals?size=4")


### POST:

To use this method you must be in a specific category

**Main url** : `api-quizz.vercel.app/api/v1/nameCategory` 

Another option that you have is to create new questions, through the POST method, but for this it is necessary that you send the complete question, with the following requirements:
- An id.
- A question.
- Four response options, with internal requirements:
   1. text: answer choice
   2. replay: if the answer is correct

###### Example:

`api-quizz.vercel.app/api/v1/animals/`

	{
		  "id": 16,
			"ask": "Questions number 16",
			"optionA": {
				"text": "option one",
				"replay": false
			},
			"optionB": {
				"text": "option two",
				"replay": true
			},
			"optionC": {
				"text": "option three",
				"replay": false
			},
			"optionD": {
				"text": "option four",
				"replay": false
			}
	}

### PATCH:

To use this method you must be in a specific category

**Main url** : `api-quizz.vercel.app/api/v1/nameCategory` 

Another option that you have is to update questions, through the PATCH method. You just have to write to an object the specific property you want to change. Not is necessary that you write all properties.

###### Example:

	{
		  "optionA": {
				"text": "option A modified",
				"replay": false
			}
	}


### DELETE:

To delete a question, you only need the id of the question you want to delete, that id would go after the category where it will be deleted.

`api-quizz.vercel.app/api/v1/nameCategory/id`




