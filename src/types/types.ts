export interface AdminRegisterType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface userRegisterType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface userLoginType {
  email: string;
  password: string;
}

export interface updateProfileType {
  firstName: string;
  lastName: string;
  email: string;
}

export interface userSliceStateType {
  loading: boolean;
  data: {
    success: boolean;
    data: [];
    message: string;
  } | null;
  error: string | null;
}

export interface userRegisterParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface userLoginParams {
  email: string;
  password: string;
}

export interface profileDataType {
  loading: boolean;
  data: {
    success: boolean;
    data: {
      firstName: string;
      lastName: string;
      email: string;
    };
  } | null;
  error: null | string;
}

export interface ProjectItemType {
    _id: string;
    title: string;
    status: string;
    complationStatus: number|0;
  }


export interface projectDataType {
    loading: boolean;
    data: {
      success: boolean;
      data: ProjectItemType[];
    } | null;
    error: null | string;
  }

  export interface taskItem {
    projectId: string;
    userId: string;
    projectName: string;
    dueDate?: Date | null;
    taskLists: {
      title: string;
      description: string;
      status?: string;
      dueDate?: Date | null;
    }[];
  }