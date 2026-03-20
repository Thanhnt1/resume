FROM nginx:alpine

# Xóa config mặc định
RUN rm -rf /usr/share/nginx/html/*

# Copy toàn bộ file vào nginx
COPY . /usr/share/nginx/html

# Expose port 80 trong container
EXPOSE 80
