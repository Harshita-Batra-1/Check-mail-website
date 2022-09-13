# Spam-email-classification

## To-do
- [x] add frontend
- [ ] add backend (95% done)
- [ ] train model
- [ ] connect model with backend
- [ ] connect frontend with backend using api
- [ ] automate stuffs like requirements.text
- [ ] deploy

## starting frontend
```bash
cd .\client
yarn dev
```

## activating virtual enviornment and downloading requirements in python

### Windows :
``` bash
Set-ExecutionPolicy unrestricted
```
``` bash
pip install virtualenv
python -m virtualenv env
.\env\Scripts\activate.ps1
```
```bash
pip install -r requirements.txt
```

## Generating requiremnents.txt
```bash
pipreqs .
```