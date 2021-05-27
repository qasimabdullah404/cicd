FROM python:3.9.4

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY requirements.txt /usr/src/app/
COPY test.py /usr/src/app/
RUN pip install -r requirements.txt
RUN python test.py

# Bundle app source
COPY . /usr/src/app

EXPOSE 5000
ENTRYPOINT ["python"]
CMD ["app.py"]
