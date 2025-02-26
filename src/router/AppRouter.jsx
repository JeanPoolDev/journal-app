import { Navigate, Route, Routes } from "react-router";
import { AuthRouter } from "../auth/router/AuthRouter";
import { JournalRouter } from "../journal/router/JournalRouter";
import { useDispatch, useSelector } from "react-redux";
import { CircleAuth } from "../ui/components/CircleAuth";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/sliceAuth";
import { startLoadingNotes } from "../store/journal/thunks";


export function AppRouter() {

  const { status } = useSelector((state => state.auth));
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, displayName, email, photoURL } = user;
      dispatch(login({ uid, displayName, email, photoURL }));
      dispatch(startLoadingNotes());
    })
  }, [dispatch]);


  if (status === 'checking') {
    return <CircleAuth />
  }

  return (
    <Routes>

      {
        status === 'authenticated'
          ? <Route path="/*" element={<JournalRouter />} />
          : <Route path="/auth/*" element={<AuthRouter />} />
      }

      <Route path="/*" element={<Navigate to={'auth/login'} />} />

      {/* JournalRouter */}
      {/* <Route path="/*" element={<JournalRouter />} /> */}

      {/* AuthRoter */}
      {/* <Route path="/auth/*" element={<AuthRouter />} /> */}

    </Routes>
  );
};