import * as React from 'react'
import { graphql, ChildMutateProps } from 'react-apollo'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { REMOVE_CHANNEL_MEMBER, SHOW_TEAM_QUERY } from '../graphql/server'
import {
	removeChannelMemberMutation,
	removeChannelMemberMutationVariables
} from '../../../operation-result-types'

const RemoveButton = styled.span`
	cursor: pointer;
	opacity: 1;
	float: right;
	text-transform: lowercase;
	transition: opacity 1s ease-in-out;
	&:hover {
		opacity: 0.5;
	}

	&:i {
		color: '#000';
	}
`

interface Member {
	id: string
	username: string
}

interface IProps {
	member: Member
	channelId: any
	slug: string
}

class RemoveMemberButton extends React.Component<
	ChildMutateProps<IProps, removeChannelMemberMutation, removeChannelMemberMutationVariables>
> {
	_removeMember = async () => {
		const { mutate, channelId, member, slug } = this.props

		await mutate({
			variables: {
				channelId,
				userId: member.id
			},
			refetchQueries: [
				{
					query: SHOW_TEAM_QUERY,
					variables: {
						teamSlug: slug
					}
				}
			]
		})
	}

	render() {
		return (
			<RemoveButton onClick={this._removeMember}>
				<Icon style={{ color: 'black' }} name="delete" />
			</RemoveButton>
		)
	}
}

export default graphql<IProps>(REMOVE_CHANNEL_MEMBER)(RemoveMemberButton as any)
