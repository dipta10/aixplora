# AIxplora - Your AI powered personal file explorer
<p align="center">
  <img src="aixplora_logo.png" width="350" title="AIxplora logo"><br>
<a href="https://discord.com/invite/M2AuGZvgHq">
  <img src="https://img.shields.io/badge/discord-join%20chat-blue.svg" alt="Join our Discord" height="40"></a>
</p>

AIxplora is your new personal assistant, an open-source project that opens up unlimited possibilities.
It leverages AI and LLMs to understand all types of documents, unrestricted by their length or format.

**Imagine being able to query PDF files, MP3 audio, videos, and other types of documents with equal ease and proficiency. 
Yes, that's the limitless world AIxplora is inviting you into!***


## How Can You Contribute?
There are several ways you can contribute as I just released a PoC of the project:

- Code: Write, refactor, optimize - every line of code matters!

- Documentation: Help us make our project more understandable and user-friendly.

- Testing: Every bug found is a step towards perfection.

- Suggest Features: We believe in the power of ideas, no matter where they come from.

- Spread the Word: Share our project within your networks. The more people know about AIxplora, the better it can become!

## Demo and introduction videos
[![Summary function showcase](https://img.youtube.com/vi/8x9HhWjjNtY/hqdefault.jpg)](https://youtu.be/8x9HhWjjNtY)
https://youtu.be/2lNNKLM0o7U
https://youtu.be/eKLmhJobVvc


## How to run locally

1. Clone the repo and Install dependencies
      ```
      git clone git@github.com:grumpyp/aixplora.git
      ```
2. Install dependencies
      ```
      pip install -r backend/requirements.txt
      cd frontend && npm install
      cd ..
      ```
3. Run the backend and the frontend
      ```
      python backend/main.py
      cd frontend
      npm start
      ```

**Having issues installing frontend? See this [debugging guide](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/400)**

## How to run using Docker Compose

1. Clone the repo and Install dependencies
    ```
    git clone git@github.com:grumpyp/aixplora.git
    ```
2. Build Docker image and run containers
    ```
    install=true docker compose up --build
    ```
3. When running the above command for the first time, make sure `frontend/node_modules` folder does not exist. The initial build might take some time since it will install all the required dependencies.

4. Once the build and the package installation is finished, it should show an error in the console `app exited with code null, waiting for change to restart it` (We have to work on that issues).

5. Navigate to the UI on `http://localhost:1212/`.

6. Next time when starting the app you can simply use the following command
    ```
    docker compose up
    ```
    **Note that** 
      - After adding new packages in `requirements.txt` you'll have to run `docker compose up --build`
      - After adding new packages in `package.json` you'll have to run `install=true docker compose up` to install the new packages.
      - If you want to just run frontend run `docker compose up frontend`
      - If you want to just run backend run `docker compose up backend`


## Roadmap

- Build a community around the project
- Release a standalone desktop app
- Bugfixes and improvements to scale the project
- Add more features (custom LLMs, more file types, etc.)
- Cloud deployment
- Integrations (Google Drive, Dropbox, etc.)

[![Star History Chart](https://api.star-history.com/svg?repos=grumpyp/aixplora&type=Date)](https://star-history.com/#grumpyp/aixplora&Date)

