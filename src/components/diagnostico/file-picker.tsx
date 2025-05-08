import { FC } from "react";
import ReactImageUploading from "react-images-uploading";
import uploadIcon from "../../assets/imgs/icon_upload.png";
// import confirmedIcon from "../../assets/imgs/icon_upload.png";

interface FilePickerProps {
  imagem: any,
  setImagem: (imagem: any) => void
}

export const FilePicker: FC<FilePickerProps> = (props) => {
  const {imagem, setImagem} = props
  const onChange = (imageList: any, addUpdateIndex: any) => {
    console.log(imageList, addUpdateIndex);
    setImagem(imageList);
  };
  return (
    <div>
      {/* <div
        className="
            bg-light-green 
            xl:min-w-[700px] 2xl:min-w-[650px] xl:min-h-[500px] 2xl:min-h-[500px]
            flex justify-center items-center hover:cursor-pointer border-dashed border-gray-500 border-2
            "
        style={isDragging ? { color: "red" } : undefined}
        onClick={onImageUpload}
        {...dragProps}
      >
        <div className="flex flex-col items-center gap-[22px] justify-center">
          <img src={confirmedIcon} alt="upload_icon" className="w-[35%]" />
          <h2 className="text-md font-bold text-green">Arquivo enviado</h2>
        </div>
      </div> */}
      <ReactImageUploading
        value={imagem}
        onChange={onChange}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          isDragging,
          dragProps,
        }) => (
          <div
            className="
          upload__image-wrapper
          bg-grayish-blue w-fit h-fit
          p-3"
          >
            <button
              className="
              bg-light-blue 
              xl:min-w-[700px] 2xl:min-w-[650px] xl:min-h-[500px] 2xl:min-h-[500px]
              flex justify-center items-center hover:cursor-pointer border-dashed border-gray-500 border-2
              "
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              {imagem.length < 1 ? 
              <div className="flex flex-col items-center gap-[18px] justify-center">
                <img src={uploadIcon} alt="upload_icon" className="w-[20%]" />
                <div>
                  <h2 className="text-lg font-bold text-blue">
                    Importe seu arquivo
                  </h2>
                  <h3 className="text-gray-500 text-sm font-normal">
                    Arraste ou clique pra fazer upload
                  </h3>
                </div>
              </div> :
              <div className="flex flex-col items-center justify-center gap-3
               xl:w-[600px] xl:h-[400px]
               ">
               <img src={imagem[0]["data_url"]} alt="" className="max-w-full max-h-full object-contain" /> 
                {imageList[0].file?.name}
              </div>
              }
            </button>
            &nbsp;
          </div>
        )}
      </ReactImageUploading>
    </div>
  );
};
