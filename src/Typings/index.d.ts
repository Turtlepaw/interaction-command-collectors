import { Client, CommandInteraction } from "discord.js";
import { CommandCollectorOptions } from "./interfaces";

export class CommandCollector {
    public constructor(options: CommandCollectorOptions);
  
    public ended: boolean;
    public readonly commandName: string;
    public readonly client: Client;
  
    public stop(reason: string): void;
    public on(event: 'collect', listener: (interaction: CommandInteraction) => void): this;
    public on(event: 'end', listener: (reason: string) => void): this;
}