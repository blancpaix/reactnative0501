import createDataContext from './createDataContext';
import jsonServer from '../api/server';

const blogReducer = (state, actions) => {
    switch (actions.type) {
        case 'get_blogposts':
            return actions.payload;
        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id !== actions.payload);
            // filter 함수 : 특정 조건에 맞는것만 뽑아내줌 id === payload 하면 해당 id 것만 빼내줌. 반대로하면 그 외의 것만
        case 'edit_blogpost':
            // 리턴방법 예술이네?? 목록중에서 해당하는 항목만 바꾸고 나머지는 고대로
            return state.map((blogPost) => {
                return blogPost.id == actions.id ? actions.payload : blogPost;
            });
        default : 
            return state;
    }
};

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts');

        dispatch({ type: 'get_blogposts', payload : response.data});
    }
};

const deleteBlogPost = dispatch => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);

        dispatch({ type: 'delete_blogpost', payload: id });
    }
}

// 현재 state 값으로 붙일 필요가없어서 reducer 로 안넘기는듯?
const addBlogPost = dispatch => {
    return async (title, content) => {
        await jsonServer.post('/blogposts', { title, content });

    };
};

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, { title, content});

        dispatch({ type: 'edit_blogpost', payload: { id, title, content}});
        if (callback) {
            callback();
        }
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,    // Reducer
    { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },  // functions
    []  // initial value 
)