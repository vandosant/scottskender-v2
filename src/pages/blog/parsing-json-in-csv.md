---
path: "/blog/2018/11/16/parsing-nested-json-in-csv.md"
date: "2018-11-16"
title: "Parse json columns in a csv"
---

When I was working on a submission for [this kaggle competition](https://www.kaggle.com/c/ga-customer-revenue-prediction) I had some trouble figuring out the best way to convert a bunch of nested json data in the training dataset into a format that a random forest regressor could use.

I've been learning basic machine learning techniques from [this awesome fastai course](https://course.fast.ai/ml).
From what I learned there (and from reading [Wes McKinney's book Python for Data Analysis](http://wesmckinney.com/pages/book.html)) I could get the basics down: converting the csv to a pandas DataFrame object, removing null values, adding date parts, and converting categorical data into a useable format for the regression.
But I needed a way to parse and reindex? (not sure if that's the correct term) the json keys and values -- unnest the objects and convert the values to indexed columns per row.

Example json column row in dataset:
```json
{"visits": "1", "hits": "1", "pageviews": "1"}
```

Example csv row in dataset (subset of the training set columns):
```csv
sessionId,visitId,visitNumber,totals
1131660440785968503_1472830385,1472830385,1,{"visits": "1", "hits": "1", "pageviews": "1"}
```

Load into a pandas DataFrame object:
```python
import pandas as pd
PATH = "train.csv"
df_raw = pd.read_csv(f'{PATH}')
```

Convert the json values to column values:
```python
for k in json.loads(df_raw['totals'][0]).keys(): # would be better to get keys for all rows if the schema is inconsistent
    df_raw[k] = df_raw['totals'].map(lambda x: int(json.loads(x).get(k, 0))) # note the conversion to integer too
```

Cleanup the json columns before passing `df_raw` to a random forest regressor:
```python
df_raw.drop(['totals'], inplace=True, axis=1)
```

That's it! Or, rather, that's the best way I know to do this thing at the time of writing. I'll add an update if I figure out something nicer.

Some definite improvements that I'll be working on:
1. Build up a dictionary with json keys and corresponding default values, instead of just hardcoding 0 for the integers above.
2. Parse and convert json object values.
