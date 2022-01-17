export type UserType = {
  login: string;
  bio: string;
  blog: string;
  company: string;
  email: string;
  followers: number;
  location: string;
  name: string;
  hireable: string;
};

export type UsersStateType<T> = {
  isLoading: boolean;
  error: string;
  data: T;
};

export type GlobalContextMethodsType = {
  setUserName: (userName: string) => void;
  setUser: (userState: Partial<UsersStateType<UserType | null>>) => void;
};

export type GlobalContextType = {
  userName: string;
  user: UsersStateType<UserType | null>;
  followers: UsersStateType<UserType[]>;
  methods?: GlobalContextMethodsType;
};
