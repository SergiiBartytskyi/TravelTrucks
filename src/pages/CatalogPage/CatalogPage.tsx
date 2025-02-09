import { useEffect } from "react";
import CatalogList from "../../components/CatalogList/CatalogList";
import SideBar from "../../components/SideBar/SideBar";
import LoadMoreButton from "../../components/ui/buttons/LoadMoreButton/LoadMoreButton";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { getCampers } from "../../redux/campers/operations";
import { setPage } from "../../redux/campers/slice";
import {
  selectCampers,
  selectLoading,
  selectError,
  selectPage,
  selectTotalPages,
} from "../../redux/campers/selectors";
import styles from "./CatalogPage.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectFilters } from "../../redux/filters/selectors";
import { useSearchParams } from "react-router";

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCampers);
  const isLoading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const currentPage = useAppSelector(selectPage);
  const totalPages = useAppSelector(selectTotalPages);
  const url = useAppSelector(selectFilters);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.toString() !== url) {
      dispatch(getCampers(url));
    } else {
      dispatch(getCampers(searchParams.toString()));
    }
  }, [dispatch, currentPage, url]);

  const handlePageChange = (): void => {
    const nextPage: number = currentPage + 1;
    dispatch(setPage(nextPage));
  };

  const shouldShowLoadMore: boolean =
    items.length > 0 && currentPage < totalPages && !isLoading;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sideBarWrapper}>
          <SideBar />
        </div>

        <div className={styles.catalogWrapper}>
          {items.length > 0 && <CatalogList />}
          {shouldShowLoadMore && (
            <LoadMoreButton type="button" onClick={handlePageChange} />
          )}
          {isLoading && <Loader />}
          {error && <ErrorMessage />}
        </div>
      </div>
    </section>
  );
};

export default CatalogPage;
