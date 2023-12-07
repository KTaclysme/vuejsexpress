// // databaseService.js
// import fs from 'fs/promises';

// const usersFilePath = '../jsonFiles/registered.json';

// export async function registerUser(email, password) {
//   try {
//     // Load existing users from the JSON file
//     const usersData = await fs.readFile(usersFilePath, 'utf-8');
//     const users = JSON.parse(usersData);

//     // Check if the email already exists
//     const existingUser = users.find(user => user.email === email);
//     if (existingUser) {
//       return { error: 'Email already exists' };
//     }

//     // Add the new user
//     const newUser = { email, password };
//     users.push(newUser);

//     // Save the updated users array to the JSON file
//     await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));

//     return { message: 'Inscription réussie' };
//   } catch (error) {
//     console.error('Error during registration:', error);
//     return { error: 'Internal server error' };
//   }
// }

// export async function loginUser(email, password) {
//   try {
//     // Load existing users from the JSON file
//     const usersData = await fs.readFile(usersFilePath, 'utf-8');
//     const users = JSON.parse(usersData);

//     // Find the user by email
//     const user = users.find(user => user.email === email);

//     // Check if the user exists and the password matches
//     if (user && user.password === password) {
//       return { message: 'Connexion réussie' };
//     }

//     // Unauthorized access
//     return { error: 'Adresse mail ou mot de passe incorrect' };
//   } catch (error) {
//     console.error('Error during login:', error);
//     return { error: 'Internal server error' };
//   }
// }
