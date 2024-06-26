'use client';

import Image from 'next/image';
// import Home from './components/Home';
import { useDispatch } from 'react-redux';
import { checkLocalStorageUser } from './redux/slice/loginSlice';
import { useEffect } from 'react';
import { AppDispatch, useAppSelector } from './redux/store';
import Home from './(pages)/Home';
export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>();

  const products = useAppSelector((state) => state.userList);

  useEffect(() => {
    dispatch(checkLocalStorageUser());
  }, [dispatch]); // Make sure to include dispatch in the dependency array

  return (
    <h1 className="bg-[#f4f1ea]">
      <Home />
    </h1>
  );
}
