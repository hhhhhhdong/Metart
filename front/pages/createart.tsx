import { useState, ChangeEvent, useRef, FormEvent } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Input,
  TextField,
  Button,
  Stack,
} from '@mui/material';
import Page from 'Layouts/Page';

function CreateArt() {
  const imageSelect = useRef<HTMLInputElement>(null);

  const [name, setName] = useState<String>('');
  const [description, setDescription] = useState<String>('');
  const [image, setImage] = useState<File | ''>('');
  const [imageName, setImageName] = useState<String>('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(image);
    console.log(name);
    console.log(description);
  };

  // 찾기 버튼 클릭 핸들링
  const handleImageClick = () => {
    if (imageSelect.current !== null) {
      imageSelect.current.click();
    }
  };

  // 이미지 업로드 핸들링
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const value = e.target.files.length !== 0 ? e.target.files[0] : '';

    setImage(value);

    if (value !== '') setImageName(value.name);
    else setImageName('');
  };

  return (
    <>
      <Page>
        <Box component="form" onSubmit={handleSubmit} mt={10} ml={10} mr={10}>
          <Stack spacing={4}>
            <Stack direction="row" alignItems="center">
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg, image/gif"
                ref={imageSelect}
                onChange={handleImage}
                style={{ display: 'none' }}
              />
              <TextField
                sx={{ width: '85%' }}
                type="text"
                label="NFT 작품 (업로드 확장자 형식: png, jpeg, jpg, gif)"
                value={imageName}
                disabled
              />
              <Button
                sx={{
                  ml: 3,
                  fontSize: 16,
                  height: '56px',
                  width: '15%',
                  padding: '8px 0',
                }}
                variant="contained"
                size="large"
                onClick={handleImageClick}
              >
                Upload
              </Button>
            </Stack>
            <TextField
              type="text"
              label="이름"
              value={name}
              onChange={handleNameChange}
            />
            <TextField
              type="text"
              label="설명"
              multiline
              rows={5}
              value={description}
              onChange={handleDescriptionChange}
            />
            <Stack alignItems="center">
              <Button
                size="large"
                type="submit"
                variant="contained"
                sx={{ width: '40%' }}
              >
                Create
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Page>
    </>
  );
}

export default CreateArt;