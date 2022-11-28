import React, {
  useMemo,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useCallback,
} from "react";
import { View } from "react-native";
import * as Font from "expo-font";

import {
  WorkSans_300Light,
  WorkSans_400Regular,
  WorkSans_500Medium,
  WorkSans_600SemiBold,
  WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";

const AppContext = createContext();

const InitialState = {
  // currentApiToken: null,
  // currentUserId: null,
  // apiClient: null,
  isReady: false,
};

export const ACTIONS = {
  INITIAL_STATE: "INITIAL_STATE",
  SIGNIN: "SIGNIN",
  SIGNOUT: "SIGNOUT",
  SIGNOUT_START: "SIGNOUT_START",
  UPDATE_ACCESS_TOKEN: "UPDATE_ACCESS_TOKEN",
};

const loadAllFonts = async () => {
  await Font.loadAsync({
    WorkSans_300Light,
    WorkSans_400Regular,
    WorkSans_500Medium,
    WorkSans_600SemiBold,
    WorkSans_700Bold,
  });
};

async function recoverAppState() {
  // const token = await ensureValidPublicApiToken();
  // const apiClient = buildApiClient(token);

  return {
    //   currentApiToken: token,
    //   currentUserId: token.user,
    //   apiClient,
    isReady: true,
  };
}

function appReducer(state, action) {
  switch (action.type) {
    case ACTIONS.INITIAL_STATE: {
      return { ...state, ...action.payload };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(`useApp must be used within a AppProvider`);
  }

  const [state, dispatch] = context;

  return {
    ...state,
  };
}

function AppProvider(props) {
  const [state, dispatch] = useReducer(appReducer, InitialState);
  const contextValues = useMemo(() => [state, dispatch], [state]);

  useEffect(() => {
    loadApp();
  }, []);

  const loadApp = async () => {
    await loadAllFonts();
    const payload = await recoverAppState();
    dispatch({ type: ACTIONS.INITIAL_STATE, payload });
  };

  const hideSplashScreen = useCallback(async () => {
    if (state.isReady) await SplashScreen.hideAsync();
  }, [state.isReady]);

  if (!state.isReady) return null;

  return (
    <View style={{ flex: 1 }} onLayout={hideSplashScreen}>
      <AppContext.Provider value={contextValues}>
        {props.children}
      </AppContext.Provider>
    </View>
  );
}

export { AppProvider, useApp };
