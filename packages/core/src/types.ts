/**
 * A user participating in a chat
 * @public
 */
 export interface User {
    id: number;
    username: string;
    name: string;
    iconUrl: string;
  }
  
  /**
   * A chat message
   * @public
   */
  export interface Message {
    id: number;
    teamId: string;
    channelId: string;
    userId: string;
    createdAt: string;
    user: User;
    body: string;
  }
  
  /**
   * A team, containing one or more chat channels
   * @public
   *
   * @remarks
   * The {@link @core/types#isTeam} type guard may be used to
   * detect whether a value conforms to this interface
   */
  export interface Team {
    iconUrl: string;
    name: string;
    id: string;
    channels: Channel[];
  }
  
  /**
   * A chat channel, containing many chat messages
   * @public
   */
  export interface Channel {
    teamId: string;
    name: string;
    description: string;
    id: string;
    messages: Message[];
  }
  