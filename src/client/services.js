import { ObservableSocket } from 'shared/observable-socket';
import io from 'socket.io-client';

export const socket = io({ autoConnect: false });
export const server = new ObservableSocket(socket);
// Socket Wrappers
//-----------------------------


// Playlist Store
//-----------------------------



// User Store
//-----------------------------


// Chat Store
//-----------------------------
