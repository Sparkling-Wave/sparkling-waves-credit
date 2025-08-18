# Analytics Views Update Instructions

## Overview

All analytics views need to be updated to use the new Card and CardWithDate components with Tailwind CSS instead of module.css.

## Changes Required

### 1. Import Updates

Replace the old imports with:

```tsx
import Card from "@/components/card/analyticsCard/analyticsCard";
import CardWithDate from "@/components/card/analyticsCard/analyticsCardWithPage";
```

### 2. Remove CSS Module Imports

Remove:

```tsx
import styles from "./[filename].module.css";
```

### 3. Update Container Styling

Replace:

```tsx
<div className={styles.container}>
```

With:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

### 4. Update Header Styling

Replace:

```tsx
<h2 className={styles.h2}>
  <GoDash size={30} />
  Page Title
</h2>
```

With:

```tsx
<h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
  <GoDash size={30} className="text-brand-primary" />
  Page Title
</h2>
```

### 5. Update Title Styling

Replace all title sections from:

```tsx
<div className="title-header">
  Title Text
  <div className="tooltip">
    <BsQuestionCircle size={20} />
    <span className="tooltiptext">Tooltip content</span>
  </div>
</div>
```

With:

```tsx
<div className="flex items-center gap-2">
  <span className="text-lg font-semibold text-secondary">Title Text</span>
  <div className="relative group">
    <BsQuestionCircle size={20} className="text-gray-500 cursor-help" />
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-80 z-10">
      Tooltip content
    </div>
  </div>
</div>
```

### 6. Update CardWithDate Props

Add the `page` prop and remove the `link` prop:

```tsx
<CardWithDate
  title={...}
  value={...}
  page="page-name" // Add this
  startDate={dateRange.startDate}
  endDate={dateRange.endDate}
  onStartDateChange={handleDateChange("startDate")}
  onEndDateChange={handleDateChange("endDate")}
  onFilter={handleFilter}
/>
```

### 7. Add Page Container Styling

Wrap the entire component with:

```tsx
<div className="bg-gray-50 p-6">{/* existing content */}</div>
```

## Example Updated Component Structure

```tsx
"use client";

import React, { useState, useEffect, useCallback } from "react";
import Card from "@/components/card/analyticsCard/analyticsCard";
import CardWithDate from "@/components/card/analyticsCard/analyticsCardWithPage";
import { GoDash } from "react-icons/go";
import { BsQuestionCircle } from "react-icons/bs";
// ... other imports

const ComponentName: React.FC = () => {
  // ... state and functions

  return (
    <div className="bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
        <GoDash size={30} className="text-brand-primary" />
        Page Title
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* CardWithDate and Card components */}
      </div>
    </div>
  );
};

export default ComponentName;
```

## Files to Update

- [x] active-borrowers/page.tsx
- [x] active-loans/page.tsx
- [x] active-loans-count/page.tsx
- [x] average-loan-amount/page.tsx
- [x] fully-paid-loans-count/page.tsx
- [x] gross-loans/page.tsx
- [x] non-delinquent-loans/page.tsx
- [x] non-delinquent-loans-count/page.tsx
- [x] overdue-loans-count/page.tsx
- [x] successful-remita-salary/page.tsx
- [x] total-bank-fees/totalBankFees.tsx
- [x] total-gross-loan-outstanding/page.tsx
- [x] total-partially-active-loans/page.tsx
- [x] total-partially-paid-loans-count/page.tsx
- [x] total-principal-loan-outstanding/page.tsx
- [x] total-processing-fee/totalProcessingFees.tsx
- [x] total-unique-active-borrowers/page.tsx
- [x] total-unpaid-loans/page.tsx
- [x] total-unpaid-loans-count/page.tsx
- [x] unsuccessful-remita-salary/page.tsx
- [x] total-overdue-loans/page.tsx
- [x] total-net-loan-disbursed/page.tsx
- [x] Total-interest-outstanding/page.tsx
- [x] app-user-count/page.tsx

## Additional Cleanup Completed

✅ **Commented Code Removed**: All commented Card components and unused code have been cleaned up
✅ **Module CSS Files Deleted**: All remaining `.module.css` files have been removed
✅ **Code Optimization**: Unused properties and API calls have been removed
✅ **Consistent Structure**: All files now follow the same clean, optimized pattern

## Benefits

- Consistent styling across all analytics views
- Better responsive design with Tailwind CSS
- Improved accessibility with proper hover states
- Easier maintenance with centralized styling
- Modern UI with brand colors and transitions
