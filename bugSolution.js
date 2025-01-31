```javascript
// Improved aggregation pipeline with error handling
db.users.aggregate([
  {
    $match: { age: { $exists: true, $type: "number" } }
  },
  {
    $group: {
      _id: "$city",
      averageAge: { $avg: "$age" }
    }
  },
  {
    $sort: { averageAge: -1 }
  }
])
```