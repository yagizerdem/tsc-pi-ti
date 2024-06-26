type Nullable<T> = T | null;
declare var io: {
  connect(url: string): Socket;
};
interface Socket {
  on(event: string, callback: (data: any) => void): void;
  emit(event: string, data?: Nullable<any>): void;
}
