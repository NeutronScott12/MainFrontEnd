import * as React from 'react'
import { LockOutlined } from '@ant-design/icons'

import { InputField } from '../../../../../utils/form/inputField'
import { FormContainer } from '../../../../../utils/form/FormContainer'

const ResetPasswordForm: React.FunctionComponent = (): JSX.Element => (
	<FormContainer
		formInputs={[
			{
				type: 'password',
				name: 'password',
				prefix: (
					<LockOutlined
						type={undefined}
						translate={undefined}
						onAuxClick={undefined}
						onAuxClickCapture={undefined}
						style={{ color: 'rgba(0,0,0,.25)' }}
					/>
				) as any,
				component: InputField
			},
			{
				type: 'password',
				name: 'confirmPassword',
				placeholder: 'Duplicate Password',
				component: InputField
			}
		]}
	/>
)

export default ResetPasswordForm
