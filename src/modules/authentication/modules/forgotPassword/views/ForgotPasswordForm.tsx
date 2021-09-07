import * as React from 'react'
import { MailOutlined } from '@ant-design/icons'

import { InputField } from '../../../../../utils/form/inputField'
import { FormContainer } from '../../../../../utils/form/FormContainer'

const ForgotPasswordForm: React.FunctionComponent = (): JSX.Element => (
	<FormContainer
		formInputs={[
			{
				type: 'text',
				placeholder: 'Email',
				name: 'email',
				prefix: (
					<MailOutlined
						style={{ color: 'rgba(0,0,0,.25)' }}
						type={undefined}
						translate={undefined}
						onAuxClick={undefined}
						onAuxClickCapture={undefined}
					/>
				),
				component: InputField
			}
		]}
	/>
)

export default ForgotPasswordForm
