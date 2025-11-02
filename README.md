## Task 0: API Integration for Property Listing Page

### ✅ Setup
- Duplicated repo: `alx-listing-app-03` → `alx-listing-app-04`
- Installed `axios` for API requests

### 🔧 Implementation
- Replaced hardcoded property data with dynamic API call to `/api/properties`
- Used `useEffect` to fetch data on mount
- Managed loading state with `useState`
- Updated `PropertyCard` to render dynamic data

### 🧪 Testing
- Verified dynamic rendering of property cards
- Confirmed loading state and error handling