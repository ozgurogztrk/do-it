# Do It is a to-do application with a modern and user-friendly design

<a href="https://do-it-reactjs.web.app/">Live preview of the website</a>

<br/>

<img src="https://github.com/ozgurogztrk/ozgurogztrk/blob/main/do-it.png?raw=true" alt="Preview image of the website">

<br/>

## Firebase Configurations
<ul>
  <li>Enable Email/Password authentication</li>
  
<br/>
  
  <li>Enable Cloud Firestore and add these security rules:
  
```sh
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
  
    // Allow users to read their own document in the "list-collection" collection
    match /list-collection/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
    }
    
    // Allow users to create a new document in the "list-collection" collection
    match /list-collection/{userId} {
      allow create: if request.auth != null;
    }
    
    // Allow users to update their own document in the "list-collection" collection
    match /list-collection/{userId} {
      allow update: if request.auth != null && request.auth.uid == userId;
    }
    
    // Allow users to delete their own document in the "list-collection" collection
    match /list-collection/{userId} {
      allow delete: if request.auth != null && request.auth.uid == userId;
    }
  }
}

```
  </li>
  
<br/>
  
<li><p>Create an .env file in the root directory of the project, and it should be like this:</p>

```sh
VITE_FIREBASE_API_KEY = ...

VITE_FIREBASE_AUTH_DOMAIN = ...

VITE_FIREBASE_PROJECT_ID = ...

VITE_FIREBASE_STORAGE_BUCKET = ...

VITE_FIREBASE_MESSAGING_SENDER_ID = ...

VITE_FIREBASE_APP_ID = ...
```
  </li>
</ul>

<br/>

## Project Setup
```sh
npm install
```

<br/>

### Compile and Hot-Reload for Development

```sh
npm run dev
```

<br/>

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
