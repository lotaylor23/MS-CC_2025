- Item Point slides to read through each definition for Machine Learning Algorithms 
- Item Read supplmental information in resource links provided within slides 
- Item Download dataset and python notebook
- Run each code snippet in the notebook Compare analysis with materials read in power point slides
-  Run each code snippet in the notebook Compare analysis with materials read in power point slides
-  Come with questions for next session
-  Ignore Linear Regression error and move to next step

-  Hyperparameter tuning:
-  Use the code snippet below to hyperparamter tune Random Forest (RF) Classifier model
```
param_grid = {
    'n_estimators': [50, 100, 150],
    'max_depth': [None, 10, 20],
    'min_samples_split': [2, 5, 10],
    'max_features': ['sqrt', 'log2']
}

rf = RandomForestClassifier(random_state=42)

grid_search = GridSearchCV(estimator=rf, param_grid=param_grid,
                           cv=5, n_jobs=-1, verbose=1, scoring='accuracy')

grid_search.fit(X_train_pre, y_train)

print("Best parameters:", grid_search.best_params_)
print("Best CV score:", grid_search.best_score_)
```
- Try different values for hyperparameter tunning

More information about dataset
https://ecologicaldata.org/wiki/pantheria 
https://esajournals.onlinelibrary.wiley.com/doi/10.1890/08-1494.1
