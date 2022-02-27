import {
  Client,
  CommandInteraction
} from "discord.js";

export interface CommandCollectorOptions {
  client: Client;
  commandName: string;
}