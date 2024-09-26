# nuc-arc

Context Object:

```json
{
  "session": {
    "train": "TRAIN_SESSION_ID",
    "test": "TEST_SESSION_ID"
  },
  "declarations": "NUC_CODE",
  "train": [
    {
      "input": "ARC_MATRIX",
      "output": "ARC_MATRIX"
    }
  ],
  "test": [
    {
      "input": "ARC_MATRIX",
      "output": "ARC_MATRIX"
    }
  ],
  "instances": {
    "train": [
      {
        "arc": "ARC_MATRIX",
        "nuc": "NUC_CODE",
        "value": "NUC_VALUE"
      }
    ],
    "test": [
      {
        "arc": "ARC_MATRIX",
        "nuc": "NUC_CODE",
        "value": "NUC_VALUE"
      }
    ]
  }
}
```
