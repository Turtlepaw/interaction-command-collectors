import { Client, CommandInteraction } from "discord.js";
import { CommandCollectorOptions } from "../Typings/interfaces";
import { CommandCollectorEvents } from "../Typings/types";
import { EventEmitter } from "events";

export default class CommandCollector extends EventEmitter {
    public readonly client: Client;

    public readonly commandName: string;

    public ended: boolean;

    constructor(options: CommandCollectorOptions) {
        super();

        /**
         * The discord.js client.
         */
        this.client = options.client;

        /**
         * The command name to listen for.
         */
        this.commandName = options.commandName

        /**
         * If the collector has ended.
         */
        this.ended = false;

        this.client.on("interactionCreate", interaction => {
            if(this.ended == true) return;
            if (interaction.isCommand() && interaction.commandName == this.commandName) {
                this.emit("collect", interaction);
            }
        });
    }

    stop(reason: string = "user") {
        if (this.ended) return;

        this.ended = true;
        this.emit('end', reason);
    }
}