import { Routes, Route } from "react-router-dom";
import AuthWrapper from "./components/UI/AuthWrapper";
import CommentsPage from "./pages/CommentsPage";
import CommentsPostPage from "./pages/CommentsPostPage";
import IndexPage from "./pages/IndexPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import SignupSuccessPage from "./pages/SignupSuccessPage";
import ContentsPage from "./pages/ContentsPage";
import PostContentsPage from "./pages/PostContentsPage";
import EditContentsPage from "./pages/EditContentsPage";
import PostCommentsPage from "./pages/PostCommentsPage";
import ContentsPostPage from "./pages/ContentsPostPage";
import AdminWaitingListPage from "./pages/AdminWaitingListPage";
import AdminWaitingPostPage from "./pages/AdminWaitingPostPage";
import UserContentsPostPage from "./pages/UserContentsPostPage";
import UserContentsPage from "./pages/UserContentsPage";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <AuthWrapper>
                        <IndexPage />
                    </AuthWrapper>
                }
            />
            <Route
                path="/signin"
                element={
                    <AuthWrapper auth={false}>
                        <SigninPage />
                    </AuthWrapper>
                }
            />
            <Route
                path="/signup"
                element={
                    <AuthWrapper auth={false}>
                        <SignupPage />
                    </AuthWrapper>
                }
            />
            <Route
                path="/signup-success"
                element={
                    <AuthWrapper auth={false}>
                        <SignupSuccessPage />
                    </AuthWrapper>
                }
            />
            <Route
                path="/contents"
                element={
                    <AuthWrapper>
                        <ContentsPage />
                    </AuthWrapper>
                }
            />

            <Route
                path="/usercontents"
                element={
                    <AuthWrapper>
                        <UserContentsPage />
                    </AuthWrapper>
                }
            />

            <Route
                path="/contents/:contentId"
                element={
                    <AuthWrapper auth={true} onlyAdmin={true}>
                        <ContentsPostPage />
                    </AuthWrapper>
                }
            />
            
            <Route
                path="/write-contents/:categoryId"
                auth={true}
                element={
                    <AuthWrapper auth={true}>
                        <PostContentsPage />
                    </AuthWrapper>
                }
            />
           
            <Route
                path="/usercontents/:contentId"
                element={
                    <AuthWrapper auth={true}>
                        <UserContentsPostPage />
                    </AuthWrapper>
                }
            /> 
            
            <Route
                path="/contents/:contentId/edit"
                auth={true}
                element={
                    <AuthWrapper auth={true}>
                        <EditContentsPage />
                    </AuthWrapper>
                }
            />
            <Route
                path="/comments"
                element={
                    <AuthWrapper>
                        <CommentsPage />
                    </AuthWrapper>
                }
            />
            <Route
                path="/comments/:commentId"
                element={
                    <AuthWrapper>
                        <CommentsPostPage />
                    </AuthWrapper>
                }
            />
            <Route
                path="/write-comments"
                element={
                    <AuthWrapper auth={true}>
                        <PostCommentsPage />
                    </AuthWrapper>
                }
            />
            <Route
                path="/contents/waiting-lists"
                element={
                    <AuthWrapper auth={true} onlyAdmin={true}>
                        <AdminWaitingListPage />
                    </AuthWrapper>
                }
            />
            <Route
                path="/contents/waiting-lists/:waitingContentId"
                element={
                    <AuthWrapper auth={true} onlyAdmin={true}>
                        <AdminWaitingPostPage />
                    </AuthWrapper>
                }
            />


        </Routes>
    );
}

export default App;
