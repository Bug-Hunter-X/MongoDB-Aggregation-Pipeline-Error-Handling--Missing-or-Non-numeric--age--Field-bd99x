# MongoDB Aggregation Pipeline Error Handling

This repository demonstrates a common error in MongoDB aggregation pipelines and shows a solution for handling potential issues.

The original pipeline attempts to calculate the average age of users grouped by city. However, it fails to account for cases where the 'age' field might be missing or contains non-numeric values. 

The solution adds validation and error handling to ensure the pipeline gracefully handles such scenarios and returns meaningful results even when encountering these data anomalies.