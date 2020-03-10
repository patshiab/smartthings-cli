import { APICommand } from '@smartthings/cli-lib'


export default class LocationsDelete extends APICommand {
	static description = "delete a Location from a user's account"

	static flags = APICommand.flags

	static args = [{
		name: 'id',
		description: 'the location id',
		required: true,
	}]

	async run(): Promise<void> {
		const { args, argv, flags } = this.parse(LocationsDelete)
		await super.setup(argv, flags)

		this.client.locations.delete(args.id).then(async () => {
			this.log(`location ${args.id} deleted`)
		}).catch(err => {
			this.log(`caught error ${err}`)
		})
	}
}