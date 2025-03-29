# EmployWise Assignment

## Live Demo
[Check it out here](https://rococo-smakager-dfc555.netlify.app/)

## 📌 Overview
EmployWise is a user management application that allows users to view, edit, and delete employee details. The project is built using React with Vite, TypeScript, and TailwindCSS. Data is fetched from the dummy API [Reqres.in](https://reqres.in/).

## Tech Stack
- **Frontend:** React 19, TypeScript, Vite, TailwindCSS
- **State Management:** React Query (TanStack)
- **Form Handling & Validation:** React Hook Form, Zod
- **API Client:** Axios
- **UI Components:** shadcn/ui,  Lucide Icons

## Features
- Fetch and display a list of users from the API.
- Pagination using infinite-query (react-query).
- Responsive layout with ShadcnUI.
- **Edit User:**
  - Opens a modal with pre-filled user data.
  - Uses `PUT /api/users/{id}` to update details.
- **Delete User:**
  - Removes the user from the list.
  - Uses `DELETE /api/users/{id}`.
- Shows success and error toast messages using Sonner.

## Installation & Running the Project

#### 1. Clone the repository
```bash
git clone https://github.com/AyushShende25/employWiseAssignment.git
cd employWiseAssignment
```

#### 2. Install dependencies
```bash
pnpm install  # or npm install / yarn install
```

#### 3. Start the development server
```bash
pnpm dev  # or npm run dev / yarn dev
```

#### 4. Build for production
```bash
pnpm build  # or npm run build / yarn build
```


## Assumptions & Considerations
- The application uses [Reqres.in](https://reqres.in/) as a dummy API.
- Since Reqres.in doesn’t persist changes, updates won’t be reflected after a page reload.
- React Query is used for caching and refetching data after updates.


