import { useEffect } from "react";
import { ItemTypes } from "../constants/ItemTypes";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { IProduct, IUser } from "../model";
import { setUser } from "../redux/toolkitSlice";

interface useUserDataProps {
    
}

export const useUserData = () => {
    const userData: IUser = useSelector((state: any) => state.toolkit.user)

    return {userData};
}