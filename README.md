<div align="left" style="position: relative;">
<img src="https://www.pngall.com/wp-content/uploads/2016/05/Vacation-Free-Download-PNG.png" align="right" width="30%" style="margin: -20px 0 0 20px;">
<h1>DESTINIA</h1>
<p align="left">
	<em>Unlocking seamless journeys with code harmony.</em>
	<a href="https://www.figma.com/community/file/1091046863319888542/saas-landing-page-template-landing-page-template-ready-to-export-to-html-landing-page-for-saas">Figma<a/>
</p>
<p align="left">
	<img src="https://img.shields.io/github/last-commit/s-pl/destinia?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/s-pl/destinia?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/s-pl/destinia?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="left">
</p>
<p align="left">

</p>
</div>
<br clear="right">

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

Destinia is a travel platform that simplifies flight search and booking. Its intuitive interface allows users to easily find and compare flights based on price, duration, and departure time. With features like interactive maps and personalized recommendations, Destinia caters to travelers seeking seamless and tailored travel experiences.

---

##  Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>Utilizes **React** for frontend development</li><li>Integrates **Chakra UI** and **Framer Motion** for styling and animations</li><li>Configures **Vite** with **React SWC plugin** for efficient development</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Follows **ESLint** guidelines for code consistency</li><li>Utilizes **@types/react** for type safety</li><li>Implements **eslint-plugin-react** and **eslint-plugin-react-hooks** for React-specific linting</li></ul> |
| 📄 | **Documentation** | <ul><li>Extensive documentation in **JavaScript** with **JSON**, **JS**, **HTML**, and **CSS** files</li><li>Package management using **npm** with detailed **package-lock.json** and **package.json** files</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Integrates with **React Router** for navigation</li><li>Utilizes **Leaflet** for interactive map display</li><li>Incorporates **OpenAI** and **SerpAPI** for intelligent assistant and flight data retrieval</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Organized components like **Modal**, **SearchForm**, and **FlightCard** for reusability</li><li>Separate hooks like **useFlights** and **useSearchForm** for specific functionalities</li><li>Modular CSS files for styling components</li></ul> |
| 🧪 | **Testing**       | <ul><li>Testing commands available using **npm test**</li><li>Includes testing components like **LoadingSpinner** and **ErrorMessage**</li><li>Ensures error handling and loading states in hooks like **useFlights**</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Efficient data retrieval and sorting in **useFlights** hook</li><li>Optimized map display using **Leaflet**</li><li>Utilizes **Framer Motion** for smooth animations</li></ul> |
| 🛡️ | **Security**      | <ul><li>Secure data handling in **FlightService** and **destinationService**</li><li>Follows best practices for user input handling</li><li>Ensures secure communication with external APIs</li></ul> |
| 📦 | **Dependencies**  | <ul><li>Key dependencies include **React**, **Chakra UI**, **Framer Motion**, **Leaflet**, and **axios**</li><li>Utilizes **@fortawesome/react-fontawesome** for icons</li><li>Manages dependencies with **package-lock.json** and **package.json**</li></ul> |

---

##  Project Structure

```sh
└── destinia/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public
    │   └── vite.svg
    ├── src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── Pages
    │   │   ├── Flights
    │   │   │   ├── Flights.css
    │   │   │   └── Flights.jsx
    │   │   ├── Home
    │   │   │   ├── Home.css
    │   │   │   └── Home.jsx
    │   │   └── Ia
    │   │       ├── Ia.css
    │   │       └── Ia.jsx
    │   ├── assets
    │   │   ├── av.png
    │   │   └── react.svg
    │   ├── components
    │   │   ├── ErrorMessage
    │   │   │   └── ErrorMessage.jsx
    │   │   ├── FlightCard
    │   │   │   └── FlightCard.jsx
    │   │   ├── FlightFilters
    │   │   │   └── FlightFilters.jsx
    │   │   ├── FlightList
    │   │   │   └── FlightList.jsx
    │   │   ├── Footer
    │   │   │   ├── Footer.css
    │   │   │   └── Footer.jsx
    │   │   ├── HeroSection
    │   │   │   └── HeroSection.jsx
    │   │   ├── Layout
    │   │   │   └── Layout.jsx
    │   │   ├── LoadingSpinner
    │   │   │   └── LoadingSpinner.jsx
    │   │   ├── MapDisplay
    │   │   │   └── MapDisplay.jsx
    │   │   ├── Modal
    │   │   │   ├── Modal.css
    │   │   │   └── ModalContext.jsx
    │   │   ├── Navbar
    │   │   │   ├── Navbar.css
    │   │   │   └── Navbar.jsx
    │   │   ├── SearchForm
    │   │   │   └── SearchForm.jsx
    │   │   └── SearchInfo
    │   │       └── SearchInfo.jsx
    │   ├── hooks
    │   │   ├── useAnimatedTitle.js
    │   │   ├── useFlights.js
    │   │   ├── useSearchForm.js
    │   │   └── useSearchParam.js
    │   ├── index.css
    │   ├── main.jsx
    │   ├── services
    │   │   ├── FlightService.js
    │   │   └── destinationService.js
    │   └── utils
    │       ├── formatUtils.js
    │       └── mapUtils.js
    └── vite.config.js
```


###  Project Index
<details open>
	<summary><b><code>DESTINIA/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/s-pl/destinia/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td>- The provided code file, package-lock.json, plays a crucial role in managing dependencies for the "definitivo" project<br>- It ensures that the project utilizes specific versions of essential packages such as "@chakra-ui/icons," "@chakra-ui/react," "@emotion/react," and others<br>- By defining and locking these dependencies, the code file helps maintain consistency and stability within the project's architecture, enabling seamless integration of external libraries and resources.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/s-pl/destinia/blob/master/vite.config.js'>vite.config.js</a></b></td>
				<td>Configures Vite to utilize the React SWC plugin for efficient React development.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/s-pl/destinia/blob/master/package.json'>package.json</a></b></td>
				<td>- Facilitates project setup and configuration by defining dependencies, scripts, and project metadata in the package.json file<br>- This file serves as a central hub for managing project dependencies, build scripts, and development tools, ensuring seamless integration and maintenance of the project's ecosystem.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/s-pl/destinia/blob/master/index.html'>index.html</a></b></td>
				<td>- Defines the main HTML structure for the Vite + React project, setting up the initial layout and linking the main JavaScript file for the application<br>- This file serves as the entry point for the frontend application, providing the necessary foundation for rendering React components and managing the application's state.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/s-pl/destinia/blob/master/eslint.config.js'>eslint.config.js</a></b></td>
				<td>- Defines ESLint configuration for JavaScript and React files, specifying language options, settings, plugins, and rules<br>- Utilizes recommended rules from various plugins to ensure code quality and adherence to best practices<br>- Supports modern ECMAScript features, JSX syntax, and React-specific guidelines.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> 
		<summary><b>src</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/index.css'>index.css</a></b></td>
				<td>- Define global styling for the project by importing a font and setting default styles for elements<br>- Ensure a consistent look and feel across the application with a dark background and white text color.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/App.css'>App.css</a></b></td>
				<td>Defines global styles for the project, ensuring consistent visual presentation across components.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/App.jsx'>App.jsx</a></b></td>
				<td>- Defines the main application structure by rendering different pages within a layout using React Router<br>- It leverages Chakra UI for styling and includes a ModalProvider for managing modals<br>- The file orchestrates the navigation flow and content display for the Home, Flights, and Ia pages in the project.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/main.jsx'>main.jsx</a></b></td>
				<td>Enables rendering the main application component using React's StrictMode for enhanced development and debugging capabilities.</td>
			</tr>
			</table>
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<details>
						<summary><b>Modal</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/components/Modal/Modal.css'>Modal.css</a></b></td>
								<td>- Define the default dark theme styling for modals, including overlay, container, header, body, and footer<br>- Implement animations for fade-in and slide-in effects<br>- Customize button styles for primary actions<br>- Ensure responsive design for various screen sizes, adjusting dimensions and padding accordingly.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/components/Modal/ModalContext.jsx'>ModalContext.jsx</a></b></td>
								<td>- Defines a Modal component with open and close functionality, handling content display and user interactions<br>- Manages modal state, content, and title, allowing for dynamic rendering within the application<br>- Enables users to interact with the modal through various actions like opening, closing, and handling outside clicks or keyboard events.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>ErrorMessage</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/components/ErrorMessage/ErrorMessage.jsx'>ErrorMessage.jsx</a></b></td>
								<td>- Defines a reusable React component for displaying error messages and providing a retry option<br>- This component enhances user experience by presenting error messages in a user-friendly manner and allowing users to easily attempt the action again.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>SearchInfo</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/components/SearchInfo/SearchInfo.jsx'>SearchInfo.jsx</a></b></td>
								<td>- Displays flight search information with origin, destination, dates, and passenger count<br>- Formats and presents search details in a user-friendly manner.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>FlightFilters</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/components/FlightFilters/FlightFilters.jsx'>FlightFilters.jsx</a></b></td>
								<td>Enables sorting flights by price, duration, or departure time.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>SearchForm</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/components/SearchForm/SearchForm.jsx'>SearchForm.jsx</a></b></td>
								<td>- Enables users to input flight search criteria through a visually appealing form<br>- Handles user interactions for entering origin, destination, dates, and passenger count<br>- Utilizes animations for a smooth user experience<br>- Integrates with Chakra UI and Framer Motion libraries.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>MapDisplay</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/components/MapDisplay/MapDisplay.jsx'>MapDisplay.jsx</a></b></td>
								<td>- Displays an interactive map showcasing flight destinations with average prices<br>- Retrieves data and customizes map icons for each location<br>- Incorporates animations for a visually engaging user experience.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>LoadingSpinner</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/components/LoadingSpinner/LoadingSpinner.jsx'>LoadingSpinner.jsx</a></b></td>
								<td>- Defines a reusable component for displaying a loading spinner in the project's frontend architecture<br>- This component enhances user experience by visually indicating ongoing data retrieval processes.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>FlightCard</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/components/FlightCard/FlightCard.jsx'>FlightCard.jsx</a></b></td>
								<td>- Displays a flight card component with airline details, departure, arrival times, and pricing<br>- Utilizes format utilities for time and duration<br>- The component structure enhances the user interface by presenting flight information in a visually appealing format.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>FlightList</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/components/FlightList/FlightList.jsx'>FlightList.jsx</a></b></td>
								<td>- Generates a list of flights to display in the UI based on the provided flight data<br>- If no flights match the search criteria, a message is shown to the user<br>- The component iterates over the flights array and renders a FlightCard component for each flight.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>HeroSection</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/components/HeroSection/HeroSection.jsx'>HeroSection.jsx</a></b></td>
								<td>- Defines the HeroSection component responsible for displaying a dynamic title and search form in the project's homepage<br>- Utilizes animations for a visually engaging user experience<br>- Integrates with external libraries like Chakra UI and Framer Motion.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Navbar</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/components/Navbar/Navbar.jsx'>Navbar.jsx</a></b></td>
								<td>- Defines a responsive Navbar component with logo and navigation links for the React-based web application<br>- It enhances user experience by providing easy access to different sections of the site<br>- The component is styled using Chakra UI for a modern and visually appealing design.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/components/Navbar/Navbar.css'>Navbar.css</a></b></td>
								<td>- Define the styling for the Navbar component, including background color, padding, and text styles<br>- Implement hover effects for navigation links to enhance user interaction.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Layout</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/components/Layout/Layout.jsx'>Layout.jsx</a></b></td>
								<td>- Layout component renders the Navbar, main content, and Footer in a flexible column layout<br>- It integrates with React Router for dynamic content rendering.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Footer</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/components/Footer/Footer.jsx'>Footer.jsx</a></b></td>
								<td>- Enables displaying social media links and essential company information in the website footer<br>- Handles opening modals for privacy policy, terms of service, and contact details<br>- Supports seamless user interaction with the footer content.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/components/Footer/Footer.css'>Footer.css</a></b></td>
								<td>- Define the styling for the footer component, including layout, colors, and hover effects<br>- Implement responsive design for smaller screens.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>hooks</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/hooks/useFlights.js'>useFlights.js</a></b></td>
						<td>- Enables dynamic flight data retrieval and sorting based on user input, enhancing the flight search functionality<br>- The code efficiently manages loading states, error handling, and sorting criteria, providing a seamless user experience.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/hooks/useAnimatedTitle.js'>useAnimatedTitle.js</a></b></td>
						<td>Enables dynamic title updates for a travel website, cycling through enticing messages to engage users.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/hooks/useSearchForm.js'>useSearchForm.js</a></b></td>
						<td>- Enables form handling and navigation for flight search parameters<br>- Manages form state, captures user input, and constructs query string for search<br>- Navigates to the flight search results page with the specified parameters.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/hooks/useSearchParam.js'>useSearchParam.js</a></b></td>
						<td>- Extracts search parameters from the URL using React Router, providing data such as origin, destination, dates, and number of passengers<br>- This hook facilitates dynamic content rendering based on URL query parameters, enhancing user experience and search functionality within the project architecture.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>Pages</b></summary>
				<blockquote>
					<details>
						<summary><b>Ia</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/Pages/Ia/Ia.css'>Ia.css</a></b></td>
								<td>- Define styling for an Intelligent Assistant (IA) interface, including container layout, chatbox design, user and assistant message styles, input form appearance, and button styling<br>- The CSS in this file enhances the visual presentation and user experience of the IA component within the project architecture.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/Pages/Ia/Ia.jsx'>Ia.jsx</a></b></td>
								<td>- Facilitates interactive chatbot communication to recommend ideal travel destinations based on user input<br>- Utilizes OpenAI's GPT-4o model to generate personalized responses<br>- Handles user queries, processes responses, and displays conversation history in a visually appealing chat interface.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Flights</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/Pages/Flights/Flights.jsx'>Flights.jsx</a></b></td>
								<td>- Manages the display of flight search results, including filters and sorting options<br>- Retrieves search parameters and flight data to render a user-friendly interface with search information, loading indicators, error messages, and a list of available flights<br>- Enhances user experience by presenting relevant flight details based on search criteria.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/Pages/Flights/Flights.css'>Flights.css</a></b></td>
								<td>- Define the styling for the flights page, including layout, colors, and animations<br>- Ensure a consistent and visually appealing user interface for displaying flight information.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Home</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/Pages/Home/Home.css'>Home.css</a></b></td>
								<td>- Define the styling for the Home page layout, including the main content, search form, and map display<br>- Establishes a cohesive visual structure for the page elements, ensuring a consistent and appealing user interface.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/Pages/Home/Home.jsx'>Home.jsx</a></b></td>
								<td>- The Home.jsx file in the src/Pages/Home directory renders the HeroSection and MapDisplay components, forming the main content structure for the home page of the project<br>- This file plays a crucial role in displaying the key components that make up the homepage interface, contributing to the overall user experience of the application.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>utils</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/utils/mapUtils.js'>mapUtils.js</a></b></td>
						<td>Defines a custom map icon using Leaflet library for the project.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/utils/formatUtils.js'>formatUtils.js</a></b></td>
						<td>- The code file in src/utils/formatUtils.js provides functions to format time, date, and duration<br>- It enhances the codebase by enabling consistent and localized formatting of these values across the project.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>services</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/services/FlightService.js'>FlightService.js</a></b></td>
						<td>- Transforms flight data from an API into a structured format for display<br>- Fetches flight details based on origin, destination, dates, and passengers<br>- Consolidates and formats flight information including airlines, departure/arrival times, durations, prices, and layover details<br>- Facilitates seamless integration of flight data into the project's frontend for user-friendly presentation.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/s-pl/destinia/blob/master/src/services/destinationService.js'>destinationService.js</a></b></td>
						<td>- Provides destination data for the project's travel booking feature, including countries, cities, prices, and coordinates<br>- This data is essential for displaying available travel options to users, enhancing the user experience by offering a wide range of destinations to choose from.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
##  Getting Started

###  Prerequisites

Before getting started with destinia, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript (Node.js)
- **Package Manager:** Npm


###  Installation

Install destinia using one of the following methods:

**Build from source:**

1. Clone the destinia repository:
```sh
❯ git clone https://github.com/s-pl/destinia
```

2. Navigate to the project directory:
```sh
❯ cd destinia
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




###  Usage
Run destinia using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm run dev AND node server.js (2 separated terminals)
```



##  Contributing

- **🐛 [Report Issues](https://github.com/s-pl/destinia/issues)**: Submit bugs found or log feature requests for the `destinia` project.


<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/s-pl/destinia
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details closed>


---

##  License

This project is protected under the MIT License. 

---
### ⚠️ IMPORTANT NOTICE  
The application consists of three pages, but only two are accessible to the user. The "Flights" page is automatically redirected.


##  Acknowledgments

- Tiburcio
- Angelo
- Carlos


---
## IMPORTANT!

The downside of the API is that it requires an API key. You need to create a .env file and paste its content from this document: https://docs.google.com/document/d/1UXVMlvOq50s6WAUOU-K_Wr4-8ExWABsQ8lVoH7C4WaI/edit?usp=sharing (you will have to access with the IES El Rincón mail account)

Sorry for the inconvenience!


