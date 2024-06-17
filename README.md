
# Snake Client Project
Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.
This is simply a multiplayer take on the genre.
Before you can run this client, you will need to be running the server side which you can download and install from [here](#).

## Getting Started
### Prerequisites
- [Node.js](https://nodejs.org/) should be installed on your machine.
- The Snake game server should be running. You can download and start it from [here](#).
### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/snake-client.git
    ```
2. Navigate to the project directory:
    ```sh
    cd snake-client
    ```
3. Install the project dependencies:
    ```sh
    npm install
    ```
### Running the Client
1. Ensure that the server side is up and running. Follow the instructions inside the server repo to get it started.
2. Start the Snake client:
    ```sh
    node play.js
    ```
### How to Play
- Use `W` to move up
- Use `A` to move left
- Use `S` to move down
- Use `D` to move right
### Say Messages
Use specific keys to send pre-defined chat messages:
- Press `1` to say: "Hello!"
- Press `2` to say: "Watch out!"
- Press `3` to say: "Nice move!"
- Press `4` to say: "Oops!"
### Technologies Used
- Node.js
- TCP for networking
### Contributing
1. Fork the project repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.
