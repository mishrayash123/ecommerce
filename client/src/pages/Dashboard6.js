import FrameComponent20 from "../components/FrameComponent20q";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../AuthContext";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const Dashboard6 = () => {
  const {isLoggedIn} = useAuth();
  const nav = useNavigate();

  useEffect(() => {
    if(!isLoggedIn){
nav("/login")
    }
  }, []);

  return (
    <div className="w-full relative bg-gainsboro-200 h-[976px] overflow-hidden">
      <FrameComponent20 dashboard="Dashboard" />
      <Sidebar />
    </div>
  );
};

export default Dashboard6;
