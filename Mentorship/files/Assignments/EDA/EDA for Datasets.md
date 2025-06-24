# Understanding Machine Learning: Exploratory Data Analysis (EDA) Pt1
For this assignment, you will be practicing data exploration with various datasets. For this project, you will be working on datasets involving weather, climate and animal behavior. Some of these datasets will be combined while others may be separate. You will be exploring these datasets as a component to understanding and learning about applying machine learning to any investigation.

In this assignment, the challenge is to:
+ Download a dataset
+ Preview the data
+ Provide basic statistics of the data

The dataset that you will be practicing on is hosted by the National Oceanic and Atmospheric Administration. The details and correct citaton for this data can be found at:
+ https://www.ncei.noaa.gov/metadata/geoportal/rest/metadata/item/gov.noaa.ncdc:C00946/html

## What is EDA?
EDA is the step that involves examining data to understand its main characteristics, identify patterns, and discover potential issues like outliers. EDA uses various statistical and visualization techniques to gain insights, formulate hypotheses, and prepare for more formal analysis. It uses a series of steps to understand and summarize a dataset's key characteristics, identify patterns, and prepare it for further analysis. 

Performing EDA means that you will invariably summarize the data, visualize any relevant distributions, identify relationships between variables, and detect anomalies.  In general, these steps generally include:
+ Step 1: Dataset Overview and Descriptive Statistics
+ Step 2: Feature Assessment and Visualization 
+ Step 3: Data Quality Evaluation

## Steps in EDA
In this assignment, we will break down each step of the EDA process that we will cover and continue with the remaininder of the EDA process in later lectures. For our purposes, there are nine steps in the process that we are going to cover for EDA.
<br>Here's a more detailed breakdown:
1. Data Collection: Gathering the relevant data from various sources. 
2. Data Cleaning: Handling missing values, removing duplicates, and correcting inconsistencies in the data. 
3. Data Exploration:
+ Univariate Analysis: Examining individual variables using descriptive statistics (mean, median, standard deviation, etc.) and visualizations like histograms and box plots. 
+ Bivariate Analysis: Exploring relationships between pairs of variables using scatter plots, correlation matrices, and other techniques. 
4. Data Visualization: Creating visual representations of the data to identify patterns, trends, and outliers. Common visualizations include scatter plots, bar charts, line charts, heatmaps, and box plots. 
5. Handling Outliers: Identifying and dealing with extreme values that may skew analysis. 
6. Feature Engineering: Creating new features from existing ones to potentially improve model performance. 
7. Data Transformation: Normalizing or standardizing data if necessary. 
8. Documentation and Reporting: Summarizing the findings and insights from the EDA process. 
9. Iterate and Refine: EDA is often an iterative process, requiring revisiting previous steps based on new findings.

### Data Collection
Now you will practice the data gathering step in EDA. In this step, you first plan around the problem to study. For example you may cosider gathering you data based upon the answer to questions like:
+ How broad does my subject of data need to cover?
+ How long does the time period of data need to be?
+ Are there specific cohorts/subjects that need to be included?
+ What areas do I want to study the relationship to?
+ What is the overall subject that I will study?

These and more are going to affect what data points you will need to collect and evaluate for usefulness.  In this exercise, we have picked the the dataset for you.

#### Download a dataset
Step 1:
<br>Naviagte to the NOAA website via this link:
+ https://www.ncei.noaa.gov/metadata/geoportal/rest/metadata/item/gov.noaa.ncdc:C00946/html

Step 2:
<br>Click on the first link in the portal under "Search Data" section titled: "NCEI Data Search"
![image](https://github.com/user-attachments/assets/655b01d0-d1f0-4afb-ac77-bcf234446c5b)

Step 3: 
<br>From there enter some search criteria to test and download only one of the files (preferably the first on the list) to test.

Step 4:
<br>Your data should be downloaded to an accessible location that you will be able to explore or open either locally or in your cloud storage. This is important in case you will need to open in excel or use in Jupyter, Colab etc. If you are having toruble, you may also use this dataset that is gathered from the Climate Normals by NOAA in this repository's hub describing Normal Daily Maximum Temperature, °F. Data also can be found at:
+ https://www.ncei.noaa.gov/products/land-based-station/comparative-climatic-data

We are going to load this data into our enviroment for exploration. This will require the use of the read_csv() funtion. If your data is not in csv format, then you may want to convert it. Open Jupyter and import the libraries needed to work with this file. There are some standard ones so we'll get those out ouf the way first. The lines of code should resemble:
+ import numpy as np
+ import pandas as pd
+ from matplotlib import pyplot as plt

This will allow us to operate on the file and any data generated going forward.

#### Preview the data
Step 5:
<br>Now that you have done your imports, let's read in the data:
+ data_dir = "path to data/datafile.csv"
+ data = pd.read_csv(f"{data_dir}")

Step 6:
<br>What is in our data? This can be answered several ways. For a short preview we can look into the size, small extract of the data and basic info. Let's look at each one in order.
+ Size of the data
++ print(data.size)

The size attribute returns the total number of elements. For a DataFrame, this is the product of the number of rows and columns. For a Series, it is simply the number of elements in the Series.

++ print(data.shape)

The shape attribute returns a tuple representing the dimensions. For a DataFrame, it returns (number_of_rows, number_of_columns). For a Series, it returns (number_of_elements,)

+ Small extract of the data
++ data.head()

This is a method in the pandas library for Python, primarily used with DataFrames or Series. Its purpose is to display the first n rows of the object. By default, when called without any arguments, df.head() returns the first 5 rows of the DataFrame df. The number of rows returned can be specified by passing an integer argument n to the method. This method is commonly used for a quick initial inspection of a dataset to understand its structure, data types, and content.

+ Basic data info
++ data.info()
<br>The .info() method in Pandas provides a concise summary of a DataFrame. When executed, it prints information about the DataFrame's structure, including:
+ Index type: The type of the DataFrame's index.
+ Column information:
Column names.
Number of non-null values in each column, which helps in identifying missing data.
Data type (dtype) of each column.
+ Memory usage: An estimate of the memory consumed by the DataFrame, including both data and index memory. 
+ RangeIndex: The number of entries in the DataFrame.
<br>This method is useful for quickly assessing the overall structure of a DataFrame, identifying potential data quality issues like missing values, and understanding memory consumption.

#### Provide basic statistics of the data
What can we summarize or calculate about what our data contains? For this we can use .describe to generates descriptive statistics of a DataFrame. It provides a summary of the central tendency, dispersion, and shape of the distribution of a dataset. It is valuable for initial data exploration and understanding the basic characteristics of your dataset. It can help identify potential outliers, understand data distribution, and assess data quality.
<br>For numerical columns, the output includes:
+ count: The number of non-null values.
+ mean: The average value.
+ std: The standard deviation, indicating the spread of the data.
+ min: The minimum value.
+ 25%: The 25th percentile (first quartile).
+ 50%: The 50th percentile (median).
+ 75%: The 75th percentile (third quartile).
+ max: The maximum value.
<br>For object data types (e.g., strings or mixed types), the output includes:
+ count: The number of non-null values.
+ unique: The number of distinct values.
+ top: The most frequently occurring value.
+ freq: The frequency of the most frequent value.

+ Statistics of our data
++ data.describe()

#### Discussion and Reflection
This completes this exercise. Given that you see here, what can you see about your data? Is it worth exploring visualizing some of the distributions for further basic statistics? What are you informed about now with your data that would have been missed before this exploration?

 
