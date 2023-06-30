import { useCallback, useState } from "react";
import {
  getLoadingSelector,
  getKeanuSelector,
  getErrorSelector,
} from "./store/keanu/selectors";
import { fetchKeanuRequest } from "./store/keanu/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Checkbox,
  Grid,
  TextField,
  CircularProgress,
  Alert
} from "@mui/material";

enum EFieldName {
  WIDTH = "width",
  HEIGT = "height",
  YOUNG = "young",
  GRAYSCALE = "grayscale",
}

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(getLoadingSelector);
  const keanuUrl = useSelector(getKeanuSelector);
  const error = useSelector(getErrorSelector);
  const [formData, setFormData] = useState({
    width: 100,
    height: 100,
    young: false,
    grayscale: false,
  });

  const formCallback = useCallback(() => {
    dispatch(fetchKeanuRequest(formData));
  }, [formData, dispatch]);

  function setField(fieldName: string, newValue: string | boolean) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: typeof newValue !== 'string'
        ? newValue
        : Math.abs(
          parseInt(newValue.replace(/[^\d.-]+/g, '') || '0')
        )
    }));
  }

  return (
    <div className="App">
      <Grid
        container
        spacing={2}
        maxWidth={'80%'}
        marginLeft={'10%'}
        marginTop={'5vh'}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item sm={12} md={3}>
          <span>Width</span>
          <TextField
            variant="outlined"
            value={formData.width}
            onChange={(e) => setField(
              EFieldName.WIDTH,
              e.target.value
            )}
            fullWidth
          />
        </Grid>
        <Grid item sm={12} md={3}>
          <span>Height</span>
          <TextField
            variant="outlined"
            value={formData.height}
            onChange={(e) => setField(
              EFieldName.HEIGT,
              e.target.value
            )}
            fullWidth
          />
        </Grid>
        <Grid item sm={12} md={3}>
          <span>Young Keanu</span>
          <Checkbox
            value={formData.young}
            onChange={(e) => setField(
              EFieldName.YOUNG,
              e.target.checked
            )}
          />
        </Grid>
        <Grid item sm={12} md={3}>
          <span>Grayscale</span>
          <Checkbox
            value={formData.grayscale}
            onChange={(e) => setField(
              EFieldName.GRAYSCALE,
              e.target.checked
            )}
          />
        </Grid>
        <Grid item sm={12}>
          <Button variant="contained" fullWidth onClick={formCallback}>
            FETCH KEANU IMAGE!
          </Button>
        </Grid>
        <Grid item sm={12} textAlign={"center"}>
          {
            loading && <CircularProgress />
          }
          {
            !loading && !error && <img src={keanuUrl} alt='Keanu Reeves' />
          }
        </Grid>
        <Grid item sm={12}>
          {
            error && <Alert severity="error">{error}</Alert>
          }
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
