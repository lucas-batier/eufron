## Development set up

This set up was approved on:
    - macOS Monterey the 2023-03-08
    - Windows 10 the 2023-03-31

### Database set up
1. Install the last Docker Desktop version
https://www.docker.com/products/docker-desktop/
2. Launch Docker Desktop
3. Launch the containers
`docker-compose up -d`

### Backend set up
1. Install the last python version
https://www.python.org/downloads/
2. Create a python virtual environment
`python -m venv venv`
3. Activate the environment
- Windows:
    `.\venv\Scripts\activate`
- macOS: 
    `source venv/bin/activate`
4. Install requirements
`pip install -r requirements`
5. Initialize the database with migrations
`python manage.py migrate`
5. Create the superuser
`python manage.py createsuperuser`
5. Launch the server (the IP address works from the debug phone)
`python manage.py runserver 192.168.1.121:8000`

## Tools

### SQLPad

You can access an SQL request tool on http://localhost:4000 
