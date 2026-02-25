import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
}

interface ProductState {
    products: Product[];
    status?: 'idle' | 'loading' | 'succeeded' | 'failed';
}

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async () => {
        const response = await fetch('/api/products');
        return response.json();
    }
);

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (id: number) => {
        const response = await fetch(`/api/products/${id}`);
        return response.json();
    }
);

const initialState: ProductState = {
    products: [],
    status: 'idle',
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProduct.fulfilled, (state, action: { payload: Product }) => {
                state.status = 'succeeded';
                state.products.push(action.payload);
            })
            .addCase(fetchProduct.rejected, (state) => {
                state.status = 'failed';
            });
    },
});
        

export default productSlice.reducer;