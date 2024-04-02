import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';
import { admin } from '../config/firebase-config';
type AuthorizedRequest = Express.Request & { authorization: string } & { user: DecodedIdToken };

class Middleware {
	async decodeToken(req: AuthorizedRequest, res: Response, next: any) {
		const token = req.authorization.split(' ')[1];
		try {
			const decodeValue = await admin.auth().verifyIdToken(token);
			if (decodeValue) {
				req.user = decodeValue;
				return next();
			}
			return res.json()
		} catch (e) {
			return res.json();
		}
	}
}

export { Middleware };