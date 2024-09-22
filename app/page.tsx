"use client";
// FinanceTracker.js
import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ResponsiveAppBar from "./Appbar";
import Container from '@mui/material/Container';

export default function FinanceTracker() {

  return (
    <Container>
      <ResponsiveAppBar></ResponsiveAppBar>
    <ExpenseList></ExpenseList>
    </Container>
);
}
