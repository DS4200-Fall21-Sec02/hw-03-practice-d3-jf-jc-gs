# Practice D3

This repository is your starting point for Task 3 in hw-03. Assignment details and instructions are below. 

Link to your GitHub pages website: `[insert your *clickable* hyperlink here]`

# Aim of the assignment

The purpose of this assignment is to practice making D3 charts. You will create two custom carts: a bar chart and a line chart. 

# Instructions
Please look through **all** the materials below before starting. This will ensure you understand the setup instructions; how to run, organize, and submit your code; and requirements for the visualizations you build.

## Setup

You should do all your edits locally after cloning this repository. Commit major versions to your git repository.

1. Clone this repository to your local machine.
   - In your terminal / command prompt `CD` to where you want this the folder for this activity to be. Then run `git clone <YOUR_REPO_URL>`

1. In order to read data from csv files, you will need to use a python simple server. To do that follow these steps:
   - `CD` or open a terminal / command prompt window into the folder you cloned above.
   - Start a python simple server from that folder with one of these commands (depending on how you set python up on your machine): `python -m http.server`, `python3 -m http.server`, or `py -m http.server`. 
   - If you are using python 2 you will need to use `python -m SimpleHTTPServer` instead, but please switch to python 3 as [Python 2 was sunset on 2020-01-01](https://www.python.org/doc/sunset-python-2/).
   - After running the command, wait for the output: `Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/)`.
   - Open your web browser (Firefox or Chrome) and navigate to the URL: http://localhost:8000. This is where you will see your code rendered. 

## Update hyperlinks

1. Edit near the top of this `README.md` file to include a clickable hyperlink to the GitHub pages website for your repo. Replace `` `[insert your *clickable* hyperlink here]` `` with your clickable URL. 

1. In `index.html` update the GitHub repo URL with the URL of your repository. It is in the span with `id='forkongithub'`.

## Organization

Here is an overview of the files and folders provided in your repo.

### Root Files
* `README.md` is this explanatory file.

* `index.html` contains the main website content.

* `style.css` contains the CSS.

* `LICENCE` is the source code license for the template. You can add your name or leave it as is.

### Folders
Each folder has an explanatory `README.md` file.

* `data` will hold the data file(s) for your visualizations.

* `favicons` contains the favicons for the web page. You shouldn't change anything here.

* `img` contains a descriptive image for the `README.md`.

* `.github` contains [GitHub Actions](https://github.com/features/actions) ([docs](https://docs.github.com/en/actions)) which will automatically validate your HTML, CSS, and hyperlinks when you push (see the [**Validated** requirement below](#validated)). **You should not edit files here** except to create new `.yml` files for any additional actions you choose to add (you are not required to make any).

* `js` will contain all JavaScript files you write. For example, `main.js`, where you will fill in your code.  

* `lib` will contain any JavaScript library you use. It currently includes D3. To ensure long-term survivability, *use the included D3 here rather than linking to [d3js.org](https://d3js.org) or some other CDN.* Likewise, put your other libraries here rather than loading them from elsewhere.

## Visualization and web page requirements

You must implement your web page following these requirements:

* **Type**: One of the two visualizations you create has to be a grouped bar chart, and the other has to be a scatter plot.

* **Data**: For this assignment, we would like you to find and select your own data. It can be related to your research, a subject of interest, a hobby, etc. **Please submit a copy of the raw data in your repository in the `data` folder.** Note: You may want to use different datasets for your grouped bar char and line chart; that is okay, just be sure to include both datasets in your submission. 

* **Color**: Both plots must include color as a channel to encode some data.

* **Interaction**: At minimum, one of your two plots should have a "details on demand" interaction, i.e., mouseover or click on bar/point to retrieve and display its value. Otherwise, your visualizations may be static. 

* **Design**: Make sure your plots follow the design guidelines and rules of thumb discussed in lectures and readings. 

* **Code comments**: Add concise comments to your code to demonstrate your understanding of how the code works. We are not looking for paragraphs, but little to no commenting will gain little to no points. 

* **Writing**: Please include on your web page answers to the following questions for each visualization (a few sentences for each is sufficient):

  1. Explain the dataset you choose to use and why you chose it. *Make sure to include a clickable hyperlink to the original data source and include a copy of the data with your submission.*
  2. Justify why the encoding (i.e., bar chart, scatter plot) you chose is appropriate for the data you visualize.

<a name='validated'></a>**Validated**: Ensure your code passes the 'Validate HTML, CSS, and Links' checks we run when you push to GitHub. You want to see a green check next to your commit
  (<svg width='16' height='16' role='img'><path stroke='#22863a' d='M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z'></path></svg>)
  and not a red X
  (<svg width='16' height='16' role='img'><path stroke='#cb2431' d='M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z'></path></svg>).
You can also see the results in the Actions tab of your repo:
![GitHub Actions tab](img/gh-actions.png)

# Academic integrity
You are welcome to use D3 tutorials or resources as a starting point for your code.
However, **you must cite and reference the resources or sample code you use and explain how you use them**.
***This includes anything from [bl.ocks.org](https://bl.ocks.org/), [Observable](https://observablehq.com/@d3/gallery), or [Stack Overflow](https://stackoverflow.com/)!***
Failure to properly cite and attribute code is a breach of academic integrity.

Additionally, you should under no circumstances copy a classmate's code. You are welcome to ask fellow classmates and students for help and discuss the assignment, but **your submission should be your own work**.
See Canvas for more detail on our academic integrity policy and expectations.

# Submission

1. Ensure you updated (1) the GitHub Pages URL at the top of this `README.md` file and (2) the GitHub repository URL in `index.html` in the span with `id='forkongithub'`.

1. Commit all your local files and push them to the remote repository on GitHub which was generated by GitHub Classroom. We will grade based on what is visible on the GitHub Page.

1. Make sure your data is included in the repository on GitHub in the `data` folder.

1. Ensure all visualizations and prose required above are present in your GitHub page.

1. Add a page to the document you will submit for this assignment. On that page put the URL of your **GitHub Classroom-generated repository**. Do not submit a link to a personal repository; your repo must be within our class GitHub organization.