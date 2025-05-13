import React, { ReactNode } from "react";
import { toast } from "react-toastify";

export interface AppState {
  confirmDialog: {
    isOpen: boolean;
    message?: string;
    onConfirm?: () => void;
    onClose?: () => void;
  };
  modal: {
    isOpen: boolean;
    onSubmit: () => void;
    onDismiss: () => void;
    isSubmitting: boolean;
    children: () => ReactNode;
    title: () => ReactNode;
  };
}

export type ActionType =
  | "onError"
  | "onSuccessAction"
  | "onWarning"
  | "onInvalidFields"
  | "isSubmittingModal"
  | "openModal"
  | "dismissModal";

export interface LogoutAction {
  type: "logout";
}

/** App Utility Actions  **/
export interface OnErrorAction {
  type: "onError";
  message: string;
}

export interface OnSuccessAction {
  type: "onSuccess";
  message?: string;
}

export interface OnWarningAction {
  type: "onWarning";
  message: string;
}

export interface OnInvalidFieldsAction {
  type: "onInvalidFields";
  message?: string;
}

export interface OpenConfirmAction {
  type: "openConfirm";
  message?: string;
  onConfirm?: () => void;
  onClose?: () => void;
}
export interface CloseConfirmAction {
  type: "closeConfirm";
}
export interface OpenModalAction {
  type: "openModal";
  title?: () => ReactNode;
  children: () => ReactNode;
  onSubmit?: () => void;
  onDismiss?: () => void;
}
export interface SetSubmittingModalAction {
  type: "setSubmittingModal";
  isSubmitting?: boolean;
}

export interface DismissModalAction {
  type: "dismissModal";
}
export interface SetMetadataAction {
  type: "setMetadata";
}
export type AppReducerAction =
  | OnErrorAction
  | OnSuccessAction
  | OnWarningAction
  | OnInvalidFieldsAction
  | OpenConfirmAction
  | CloseConfirmAction
  | LogoutAction
  | OpenModalAction
  | SetSubmittingModalAction
  | DismissModalAction
  | SetMetadataAction;

export type AppStateReducer = (
  state: AppState,
  action: AppReducerAction
) => AppState;

export type AppDispatchType = (action: AppReducerAction) => void;

export interface AppContextValue {
  appState: AppState;
  appDispatch: AppDispatchType;
}

export const defaultAppState: AppState = {
  confirmDialog: {
    isOpen: false,
    message: `Exiting will result in loss of data.`,
    onConfirm: undefined,
    onClose: undefined
  },
  modal: {
    isOpen: false,
    onSubmit: () => {},
    onDismiss: () => {},
    isSubmitting: false,
    children: () => null,
    title: () => null
  }
};

export function appStateReducer(
  state: AppState,
  action: AppReducerAction
): AppState {
  switch (action.type) {
    case "logout":
      return defaultAppState;
    case "onError":
      toast.error(`❗ Error: ${action.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      return state;
    case "onSuccess":
      toast.success(
        `✔️ Success: ${action.message || "Information has been saved."}`,
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        }
      );
      return state;
    case "onWarning":
      toast.warning(`⚠️ Warning: ${action.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      return state;
    case "onInvalidFields":
      toast.warning(
        `👁️ ${
          action.message ||
          "Please ensure all fields have been correctly filled out"
        }`,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        }
      );
      return state;
    case "openConfirm":
      if (state.confirmDialog.isOpen) {
        return state;
      }
      return {
        ...state,
        confirmDialog: {
          isOpen: true,
          message: action.message
            ? action.message
            : `Exiting will result in loss of data.`,
          onConfirm: action.onConfirm,
          onClose: action.onClose
        }
      };
    case "closeConfirm":
      return {
        ...state,
        confirmDialog: {
          isOpen: false,
          message: `Exiting will result in loss of data.`,
          onConfirm: undefined,
          onClose: undefined
        }
      };
    case "openModal":
      return {
        ...state,
        modal: {
          isOpen: true,
          onSubmit: action.onSubmit || state.modal.onSubmit,
          onDismiss: action.onDismiss || state.modal.onDismiss,
          children: action.children,
          title: action.title || defaultAppState.modal.title,
          isSubmitting: defaultAppState.modal.isSubmitting
        }
      };
    case "setSubmittingModal":
      return {
        ...state,
        modal: {
          ...state.modal,
          isSubmitting: !!action.isSubmitting
        }
      };
    case "dismissModal":
      return {
        ...state,
        modal: defaultAppState.modal
      };
    default:
      return state;
  }
}

/*
========================== Context ==========================
*/

const AppContext = React.createContext<AppContextValue>({
  appState: defaultAppState,
  appDispatch: () => {}
});
AppContext.displayName = "AppContext";

export const ProviderAppContext = AppContext.Provider;
export const useAppContext = () => React.useContext(AppContext);
