import { axiosInstanceAPI } from "../config/axios";
import { EditBond, IndexBondParams, StoreBond } from "../types/type";

class BondService {
    async index(params?: IndexBondParams) {
        try {
            const query_params = [];
            const filter_params = [];
        
            if (params) {
              const { filter, paginate } = params;
            
                if (filter) {
                    const { created_by, bond, status } = filter;
            
                    if (created_by)
                        filter_params.push(`created_by:${created_by}`);
            
                    if (bond)
                        filter_params.push(`bond:${bond}`);

                    if (status)
                        filter_params.push(`status:${status}`);
            
                        query_params.push(`filter=${filter_params.join(',')}`);
                }
        
                if (paginate) {
                    query_params.push(`skip=${paginate.skip}`);
                    query_params.push(`take=${paginate.take}`);
                }
            }
        
            const query_string = query_params.join('&');
            const res = await axiosInstanceAPI.get(`user/bond?${query_string}`);

            return res.data;
        } catch (err: unknown) {
            console.log(err);
        }
    }

    async create({ user_to_id, user_to_role_id }: StoreBond) {
        try {
            const res = await axiosInstanceAPI.post('user/bond', { user_to_id, user_to_role_id });

            return res.data;
        } catch (err: unknown) {
            console.log(err);
        }
    }

	async edit({bond_id, status_id}: EditBond) {
		try {
            const res = await axiosInstanceAPI.patch(`user/bond/${bond_id}`, { status_id });

            return res.data;
        } catch (err: unknown) {
            console.log(err);
        }
	}
}

export default new BondService();