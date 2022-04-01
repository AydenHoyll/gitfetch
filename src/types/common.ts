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

export type UsersStateType= {
  isLoading: boolean;
  error: string;
  data: UserType | null;
  followers: UserType[];
};

export type GlobalContextMethodsType = {
  setUser: (userState: Partial<UsersStateType>) => void;
};

export type GlobalContextType = {
  user: UsersStateType;
  methods?: GlobalContextMethodsType;
};
